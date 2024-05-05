import React, { useEffect, useState } from "react";

export const Home = () => {
  const [jobList, setJobList] = useState([]); 
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
  useEffect(() => {
    getData();
  }, []);
  return(
    <div>
        <Header/>
        <div className="row">
        {
            jobList.map((val,i) => (
                <div className="col" key = {i}>
                Card
                </div>
            ))
        }
        </div>
    </div>
  )
};
