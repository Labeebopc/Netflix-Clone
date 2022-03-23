import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,actions,romans,horror} from './urls'


function App() {
  return (
    <div className='App'>
    <NavBar/>
    <Banner/>
    <RowPost url={romans} title='Romans'/>
    <RowPost url={horror} title='Horror' isSmall/>
    <RowPost url={actions} title='Action' isSmall/>
    <RowPost url={originals} title='Netflix Originals' isSmall />
    
    
    </div>
  );
}

export default App;
