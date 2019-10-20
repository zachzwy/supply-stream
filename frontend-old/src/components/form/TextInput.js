import React, { useState, useEffect, useContext } from "react";

const TextInput = ({
  label,
  value,
  name = null,
  onChange,
  onKeyDown,
  dataList,
  placeholder
}) => {
  return (
    <div>
      <div className="label">{label}</div>
      <datalist id="data-list">
        {dataList.map((item, i) => (
          <option key={i} value={item} />
        ))}
      </datalist>
      <input
        type="text"
        value={value}
        name={name}
        onChange={onChange}
        onKeyDown={onKeyDown}
        list="data-list"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default TextInput;
