// src/App.js

import React, { useState } from 'react';
import JsonInput from './components/JsonInput';
import OptionsDropdown from './components/OptionDropDown';
import ResponseDisplay from './components/ResponseDisplay';
import { Typography } from 'antd';
import './App.css';

const { Title } = Typography;

const App = () => {
  const [response, setResponse] = useState(null);
  const [operationCode, setOperationCode] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = (data) => {
    setResponse(data);
  };

  const handleGetOperationCode = (data) => {
    setOperationCode(data.operation_code);
  };

  return (
    <div className="app-container">
      <Title>Bajaj Finserv Challenge</Title>
      <div className="site-layout-content">
        <JsonInput onSubmit={handleSubmit} onGetOperationCode={handleGetOperationCode} />
        <br></br>
        <OptionsDropdown selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
        <ResponseDisplay response={response} selectedOptions={selectedOptions} />
        {operationCode !== null && (
          <div className="operation-code">
            <p>Operation Code: {operationCode}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
