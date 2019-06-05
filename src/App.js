import React from 'react';
import './App.css';
import Home from './Home'
import SearchContainer from './SearchContainer'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Home />
      <SearchContainer />
    </div>
  );
}

export default App;
