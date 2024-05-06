import { createContext, useState } from "react";

const initialData = {
  jobList: [],
  roles: [],
  experience: [],
  jobMode: [],
  minBasePay:[],
  setJobList: undefined,
  setRoles: undefined,
  setExperience: undefined,
  setJobMode: undefined,
  setMinBasePay: undefined
};

const DataContext = createContext(initialData);

const DataContextProvider = (props) => {
  const [roles, setRoles] = useState([]);
  const [jobList, setJobList] = useState([]);
  const [experience, setExperience] = useState([]);
  const [minBasePay, setMinBasePay] = useState([]);
  const [jobMode, setJobMode] = useState([]);

  return (
    <DataContext.Provider
      value={{
        jobList,
        roles,
        experience,
        jobMode,
        minBasePay,
        setJobList,
        setRoles,
        setExperience,
        setJobMode,
        setMinBasePay
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
