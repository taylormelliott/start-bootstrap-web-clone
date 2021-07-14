import React from 'react'
import './App.css';
import './FirstPage.css'
import FirstPage from './components/FirstPage';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <FirstPage />
    </div>
  );
}

export default App;
