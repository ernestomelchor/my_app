import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const randomNumber = () => {
    return Math.random();
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Refresh this page to get a new random number each time:</p>
        {randomNumber()}
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        ></a>
      </header>
    </div>
  );
}

export default App;
