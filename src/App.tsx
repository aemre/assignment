import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Theme from './Theme';
import Header from './components/header/Header';

function App() {
  return (
    <Theme>
      <div className="App">
        <Header props />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Primary</Button>

      </div>
    </Theme>
  );
}

export default App;
