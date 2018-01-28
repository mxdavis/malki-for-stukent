import React, { Component } from 'react';

import './App.css';
import {Banner} from './components/Banner'
import {Header} from './components/Header'
import {Navbar} from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Banner />
      </div>
    );
  }
}

export default App;
