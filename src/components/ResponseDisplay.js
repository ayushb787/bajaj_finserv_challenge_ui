// src/components/ResponseDisplay.js

import React from 'react';

const ResponseDisplay = ({ response, selectedOptions }) => {
  if (!response) return null;

  const filteredData = selectedOptions.reduce((acc, option) => {
    if (option === 'Alphabets' && response.alphabets) {
      acc.alphabets = response.alphabets;
    }
    if (option === 'Numbers' && response.numbers) {
      acc.numbers = response.numbers;
    }
    if (option === 'Highest Lowercase Alphabet' && response.highest_lowercase_alphabet) {
      acc.highest_lowercase_alphabet = response.highest_lowercase_alphabet;
    }
    return acc;
  }, {});

  return (
    <div className="response-display">
      <pre>{JSON.stringify(filteredData, null, 2)}</pre>
    </div>
  );
};

export default ResponseDisplay;
