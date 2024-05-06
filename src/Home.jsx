import React, { useContext, useEffect, useMemo, useState } from "react";

import { DataContext } from "./context/DataContext";
import { Header } from "./Header";
import { Card } from "./Card";

export const Home = () => {
  const [offset, setOffset] = useState(0);
  const {
    jobList,
    setJobList,
    roles,
    experience,
    jobMode,
    minBasePay,
    searchCompanyName,
  } = useContext(DataContext);

  const getData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: 10,
      offset: offset * 10,
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
      setJobList([...jobList, ...data.jdList]);
      setOffset(offset + 1);
    } catch (err) {
      console.log(err);
    }
  };

  const currentJobList = useMemo(() => {
    let finalJobList = jobList;
    // If roles are selected from dropdown
    if (finalJobList.length !== 0 && roles.length !== 0) {
      finalJobList = finalJobList.filter((job) =>
        roles.some((role) => role.value === job.jobRole)
      );
    }
    if (finalJobList.length !== 0 && Object.keys(experience).length !== 0) {
      const exp = parseInt(experience.value);
      finalJobList = finalJobList.filter((job) => job.minExp >= exp);
    }

    // If job mode are selected from dropdown- like whether job is onsite or remote
    if (finalJobList.length !== 0 && jobMode.length !== 0) {
      finalJobList = finalJobList.filter((job) =>
        jobMode.some((pos) => {
          if (pos.value !== "remote") {
            return job.location !== "remote";
          }
          return job.location === "remote";
        })
      );
    }
    if (finalJobList.length !== 0 && Object.keys(minBasePay).length !== 0) {
      const minimum_payment = parseInt(minBasePay.value);
      finalJobList = finalJobList.filter(
        (job) => job.minJdSalary >= minimum_payment
      );
    }
    if (finalJobList.length !== 0 && searchCompanyName.length !== 0) {
      finalJobList = finalJobList.filter((job) =>{
        if(job.companyName.includes(searchCompanyName))
          return true;
        return false;
      });
    }
    return finalJobList;
  }, [jobList, roles, experience, jobMode, minBasePay, searchCompanyName]);

  useEffect(() => {
    const handleObserver = (entries) => {
      if (!entries[0].isIntersecting) return;
      getData();
    };

    const observer = new IntersectionObserver(handleObserver);
    const loadMoreContainer = document.getElementById("load-more");
    observer.observe(loadMoreContainer, { threshold: 0.9 });

    return () => {
      observer.unobserve(loadMoreContainer);
    };
  }, [offset]);

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
      <div className="load-more" id="load-more"></div>
    </div>
  );
};
