import React, { useContext, useEffect, useMemo } from "react";

import { DataContext } from "./context/DataContext";
import { Header } from "./Header";
import { Card } from "./Card";

export const Home = () => {
  const { jobList, setJobList, roles, experience, jobMode, minBasePay} =
    useContext(DataContext);

  const getData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    try {
      const result = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const data = await result.json();
      setJobList(data.jdList);
      console.log(jobList);
    } catch (err) {
      console.log(err);
    }
  };

  const currentJobList = useMemo(() => {
    let finalJobList = jobList;
    console.log("Job List>>>", jobList);
    console.log("Experience>>>", typeof parseInt(experience.value), parseInt(experience.value));

    // If roles are selected from dropdown
    if (roles.length !== 0) {
      finalJobList = finalJobList.filter((job) =>
        roles.some((role) => role.value === job.jobRole)
      );
    }
    if(Object.keys(experience).length !== 0){
      const exp = parseInt(experience.value);
      finalJobList = finalJobList.filter((job) => job.minExp >= exp)
    }

    // If job mode are selected from dropdown- like whether job is onsite or remote
    if (jobMode.length !== 0) {
      finalJobList = finalJobList.filter((job) =>
        jobMode.some((pos) => {
          if (pos.value !== "remote") {
            return job.location !== "remote";
          }
          return job.location === "remote";
        })
      );
    }
    if(Object.keys(minBasePay).length !== 0){
      const minimum_payment = parseInt(minBasePay.value);
      finalJobList = finalJobList.filter((job) => job.minJdSalary >= minimum_payment)
    }
    return finalJobList;
  }, [jobList, roles, experience, jobMode, minBasePay]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <div className="row">
        {currentJobList.map((val, i) => (
          <div className="col" key={i}>
            <Card value={val} />
          </div>
        ))}
      </div>
    </div>
  );
};
