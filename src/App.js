import React from 'react';
import './App.css';
import Home from './Home'
// import SearchContainer from './SearchContainer'
import Flower from './Flower'
import {
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      {/* <Home /> */}
      {/* <SearchContainer /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/flower' component={Flower} />
      </Switch>
    </div>
  );
}

export default App;
