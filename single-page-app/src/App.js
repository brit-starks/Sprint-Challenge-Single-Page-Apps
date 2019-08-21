import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import Characters from './components/Characters';
import Episodes from './components/Episodes';


function App() {

  return (
    <div className="App">
      <h1>Rick & Morty</h1>
      <nav>
        <NavLink className='link' to='/characters'>Characters</NavLink>
        <NavLink className='link' to='/episodes'>Episodes</NavLink>
      </nav>
      <Characters />
      <Episodes />
      
      {/* <RMCharacters /> */}
      {/* <RMLocation /> */}
      {/* <RMEpisode /> */}
      <Route  exact path='/characters' component={Characters}/>
      <Route  exact path='/episodes' component={Episodes}/>
    </div>
  );
}

export default App;
