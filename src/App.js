import React from 'react';
import Global from './components/Global/Global';
import SearchBar from './components/Search/SearchBar';

function App() {
  return (
    <div>
      <h1 className='main-heading'>COVID-19</h1>
      <hr />
      <h2 className='global-heading'>Global Data</h2>
      <Global />
      <hr />
      <h2 className='search-heading'>Search for a Country</h2>
      <SearchBar />
    </div>
  );
}

export default App;
