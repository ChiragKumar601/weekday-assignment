import React from "react";
import Select from "react-select";

const groupStyles = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
};

const formatGroupLabel = (data) => <div style={groupStyles}>{data.label}</div>;

export const Filter = (props) => {
  const {
    label,
    options,
    minWidth = "100px",
    placeholder,
    multiSelect = false,
    value,
    onChange
  } = props;
  return (
    <div>
      <Select
        isMulti={multiSelect}
        name={label}
        options={options}
        value={value}
        onChange={onChange}
        styles={{
          placeholder: (defaultStyles) => {
            return {
              ...defaultStyles,
              marginLeft: 0,
              position: "absolute",
            };
          },
          input: (styles) => ({ ...styles, minWidth, textAlign: "left" }),
          option: (styles) => ({ ...styles, textAlign: "left" }),
          menuList: (provided) => ({ ...provided, maxHeight: "200px" }),
        }}
        formatGroupLabel={formatGroupLabel}
        placeholder={placeholder}
      />
    </div>
  );
};
