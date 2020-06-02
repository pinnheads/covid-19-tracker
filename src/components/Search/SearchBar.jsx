import React, { useState } from 'react';
import Select from 'react-select';
import { countries } from '../../api/countries';

export default function SearchBar() {
  const [options, setOptions] = useState([]);
  const getData = async () => {
    const data = await countries();
    setOptions(data);
  };

  return (
    <div>
      <Select options={options} onFocus={getData} isSearchable />
    </div>
  );
}
