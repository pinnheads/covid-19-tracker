import React from 'react';
import Global from './components/Global/Global';
import GithubCorner from 'react-github-corner';
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
      <GithubCorner href='https://github.com/pinnheads' />
    </div>
  );
}

export default App;
