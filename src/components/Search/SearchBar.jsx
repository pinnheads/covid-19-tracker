import React, { useState } from 'react';
import Select from 'react-select';
import Chart from '../Country/Chart/Chart';
import { countries } from '../../api/countries';

export default function SearchBar() {
  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const getData = async () => {
    const data = await countries();
    setOptions(data);
  };

  const handleChange = (e) => {
    console.log(e.value);
    setSelectedValue(e.value);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid gray',
      color: state.isSelected ? '#08d416' : 'black',
      placeholder: 'Select a country..',
      padding: 20,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  return (
    <div>
      <Select
        placeholder='USA'
        options={options}
        value={options.filter((obj) => obj.value === selectedValue)}
        onChange={handleChange}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            primary25: 'crimson',
            primary: 'black',
          },
        })}
        onFocus={getData}
        isSearchable
      />
      <Chart pickedCountry={selectedValue} />
    </div>
  );
}
