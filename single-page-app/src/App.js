import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import Characters from './components/Characters';
import Episodes from './components/Episodes';
import Location from './components/Location';


function App() {

  return (
    <div className="App">
      <h1>Rick & Morty</h1>
      <nav>
        <NavLink className='link' to='/characters'>Characters</NavLink>
        <NavLink className='link' to='/episodes'>Episodes</NavLink>
        <NavLink className='link' to='/locations'>Locations</NavLink>
      </nav>
      <Location />
      <Route exact path='/characters' component={Characters} />
      <Route path='/episodes' component={Episodes} />
      <Route path='/locations' component={Location} />
    </div>
  );
}

export default App;
