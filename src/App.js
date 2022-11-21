import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { action, comedy, documentary, originals, romance } from './Urls/urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' />
      <RowPost url={romance} title='Romance' />
      <RowPost url={documentary} title='Documentry' />
      <RowPost url={comedy} title='Comedy' />
    </div>
  );
}

export default App;
