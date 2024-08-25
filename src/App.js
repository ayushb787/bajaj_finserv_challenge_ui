import React, { useState } from 'react';
import axios from 'axios';
import JsonInput from './components/JsonInput.js';
import OptionsDropdown from './components/OptionDropDown.js';
import ResponseDisplay from './components/ResponseDisplay.js';
import { Typography } from 'antd';
// import 'antd/dist/antd.css';
import './App.css';
import { Input, Button, message, Select } from 'antd';

const { Title } = Typography;

const App = () => {
  const [response, setResponse] = useState(null);

  const handleSubmit = (data) => {
    setResponse(data);
  };

  return (
    <div className="app-container">
      <Title>Bajaj Finserv Challenge</Title>
      <div className="site-layout-content">
          <JsonInput onSubmit={handleSubmit} />
          {response && (
            <pre>{JSON.stringify(response, null, 2)}</pre>
          )}
        </div>
    </div>
  );
};

export default App;
