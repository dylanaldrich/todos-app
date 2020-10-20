import React from 'react';
import Header from './components/Header';
import Routes from './config/routes';


// import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes />
      </div>
    </div>
  );
}

export default App;
