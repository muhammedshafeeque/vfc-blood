import React, { useState } from 'react';
import Select from 'react-select';
import axios from '../../Api/Api'

function LocationAutocomplete({ value, onChange }) {
  const [options, setOptions] = useState([]);

  const fetchOptions = async (inputValue) => {
    try {
      const response = await axios.get(`/core/location?query=${inputValue}`);
      const data = response.data.map(option => ({
        value: option,
        label: option.name
      }));
      setOptions(data);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const handleChange = (selectedOption) => {
    onChange(selectedOption ? selectedOption.value : '');
  };

  const loadOptions = (inputValue, callback) => {
    if (!inputValue) {
      setOptions([]);
      return;
    }

    fetchOptions(inputValue);
  };

  return (
    <Select
      value={options.find((option) => option.value === value)}
      onChange={handleChange}
      onInputChange={loadOptions}
      options={options}
      placeholder="Select location"
      isClearable
    />
  );
}

export default LocationAutocomplete;
