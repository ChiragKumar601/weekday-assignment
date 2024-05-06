import React, { useContext } from "react";
import { Filter } from "./Filter";
import { DataContext } from "./context/DataContext";

const designOptions = [{ label: "UI", value: "ui" }];

const enggOptions = [
  { label: "Software Engineer", value: "software-eng" },
  { label: "C++ Engineer", value: "c++" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "IOS", value: "ios" },
  { label: "Android", value: "android" },
  { label: "Tech Lead", value: "tech lead" },
];
const employeeSizeOptions = [
  { label: "1-10", value: "1-10" },
  { label: "11-20", value: "11-20" },
  { label: "21-50", value: "21-50" },
  { label: "51-100", value: "51-100" },
  { label: "101-200", value: "101-200" },
  { label: "201-500", value: "201-500" },
  { label: "500+", value: "500+" },
];

const yearsOfExperienceOptions = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
];
const yearsOptions = [{ options: yearsOfExperienceOptions }];

const jobTypeOptions = [
  { label: "Remote", value: "remote" },
  { label: "Hybrid", value: "hybrid" },
  { label: "Onsite", value: "onsite" },
];

const jobModeOptions = [{ label: "Mode", options: jobTypeOptions }];

const rolesOptions = [
  { label: "Design", options: designOptions },
  { label: "Engineering", options: enggOptions },
];

const numberofEmployeesOptions = [
  { label: "Number", options: employeeSizeOptions },
];

const minSal = [
  { label: "0", value: "0" },
  { label: "10K USD", value: "10" },
  { label: "20K USD", value: "20" },
  { label: "30K USD", value: "30" },
  { label: "40K USD", value: "40" },
  { label: "50K USD", value: "50" },
  { label: "60K USD", value: "60" },
  { label: "70K USD", value: "70" },
];

const minSalaryOptions = [{ options: minSal }];

export const Header = (props) => {
  const {
    roles,
    setRoles,
    experience,
    setExperience,
    jobMode,
    setJobMode,
    minBasePay,
    setMinBasePay,
    searchCompanyName,
    setSearchCompanyName,
  } = useContext(DataContext);
  return (
    <div className="header">
      <Filter
        className="filter-left"
        value={roles}
        onChange={setRoles}
        minWidth="6rem"
        label="Roles"
        options={rolesOptions}
        placeholder="Roles"
        multiSelect={true}
      />
      <Filter
        className="filter-left"
        minWidth="12rem"
        label="Number Of Employees"
        options={numberofEmployeesOptions}
        placeholder="Number Of Employees"
        multiSelect={true}
      />
      <Filter
        className="filter-left"
        minWidth="6rem"
        value={experience}
        onChange={setExperience}
        label="Experience"
        options={yearsOptions}
        placeholder="Experience"
      />
      <Filter
        className="filter-left"
        minWidth="3.5rem"
        label="Remote"
        value={jobMode}
        onChange={setJobMode}
        options={jobModeOptions}
        placeholder="Remote"
        multiSelect={true}
      />
      <Filter
        className="filter-left"
        minWidth="12rem"
        label="Minimum Base Pay Salary"
        value={minBasePay}
        onChange={setMinBasePay}
        options={minSalaryOptions}
        placeholder="Minimum Base Pay Salary"
      />
      <input
        className="filter-left"
        value={searchCompanyName}
        onChange={(e) => setSearchCompanyName(e.target.value)}
        label="Search Company Name"
        placeholder="Search Company Name"
      />
    </div>
  );
};
