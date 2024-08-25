// src/components/JsonInput.js

import React, { useState } from 'react';
import { Input, Button, Alert } from 'antd';
import axios from 'axios';

const { TextArea } = Input;

const JsonInput = ({ onSubmit, onGetOperationCode }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setJsonInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Validate JSON
      const parsedData = JSON.parse(jsonInput);
      if (!Array.isArray(parsedData.data)) {
        throw new Error('Invalid data format');
      }

      // Clear previous errors
      setError(null);

      // Make API call
      const response = await axios.post('http://localhost:7878/bfhl', parsedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      onSubmit(response.data); // Call the onSubmit prop function
    } catch (err) {
      // Handle JSON parse errors or any other errors
      setError(err.message || 'An error occurred');
    }
  };

  const handleGetOperationCode = async () => {
    try {
      // Clear previous errors
      setError(null);

      // Make API call
      const response = await axios.get('http://localhost:7878/bfhl');
      onGetOperationCode(response.data); // Call the onGetOperationCode prop function
    } catch (err) {
      // Handle errors
      setError(err.message || 'An error occurred');
    }
  };

  return (
    <div>
      <TextArea
        rows={4}
        value={jsonInput}
        onChange={handleChange}
        placeholder="Enter JSON here"
      />
      <Button type="primary" onClick={handleSubmit} style={{ marginTop: '10px', marginRight: '10px' }}>
        Submit
      </Button>
      <Button type="default" onClick={handleGetOperationCode} style={{ marginTop: '10px' }}>
        Get Operation Code
      </Button>
      {error && <Alert message="Error" description={error} type="error" showIcon style={{ marginTop: '10px' }} />}
    </div>
  );
};

export default JsonInput;
