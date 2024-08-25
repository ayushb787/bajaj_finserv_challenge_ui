// src/components/OptionsDropdown.js

import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const OptionsDropdown = ({ selectedOptions, setSelectedOptions }) => {
  const handleChange = (value) => {
    setSelectedOptions(value);
  };

  return (
    <Select
      mode="multiple"
      placeholder="Select options to display"
      onChange={handleChange}
      className="options-dropdown"
    >
      <Option value="Alphabets">Alphabets</Option>
      <Option value="Numbers">Numbers</Option>
      <Option value="Highest Lowercase Alphabet">Highest Lowercase Alphabet</Option>
    </Select>
  );
};

export default OptionsDropdown;
