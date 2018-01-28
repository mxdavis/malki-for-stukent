import React, { Component } from 'react';

import './App.css';
import {Banner} from './components/Banner'
import {Content} from './components/Content'
import {Header} from './components/Header'
import {Navbar} from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Banner />
        <Content />
      </div>
    );
  }
}

export default App;
