import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div classNane="App">
      <header className="App-header">
      <img src={logo} className="App-logo” alt="logo" />
      <p> 
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link to="/hello">      
      <button>
        Próxima Pagina
      </button>
      </Link>
      </header>
</div>
    );

    }

  }


export default App;