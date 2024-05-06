import { createContext, useState } from "react";

const initialData = {
  jobList: [],
  roles: [],
  experience: [],
  jobMode: [],
  minBasePay:[],
  searchCompanyName:'',
  setJobList: undefined,
  setRoles: undefined,
  setExperience: undefined,
  setJobMode: undefined,
  setMinBasePay: undefined,
  setSearchCompanyName: undefined
};

const DataContext = createContext(initialData);

const DataContextProvider = (props) => {
  const [roles, setRoles] = useState([]);
  const [jobList, setJobList] = useState([]);
  const [experience, setExperience] = useState([]);
  const [minBasePay, setMinBasePay] = useState([]);
  const [jobMode, setJobMode] = useState([]);
  const [searchCompanyName, setSearchCompanyName] = useState('');

  return (
    <DataContext.Provider
      value={{
        jobList,
        roles,
        experience,
        jobMode,
        minBasePay,
        searchCompanyName,
        setJobList,
        setRoles,
        setExperience,
        setJobMode,
        setMinBasePay,
        setSearchCompanyName
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
