import React, { useState, useEffect, useContext } from "react";

const SelectInput = ({ label, options }) => {
  return (
    <div>
      <div className="label">{label}</div>
      <select>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.description}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
