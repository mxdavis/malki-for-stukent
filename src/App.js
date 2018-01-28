import React, { Component } from 'react';

import './App.css';
import {Banner} from './components/Banner/Banner'
import {Content} from './components/Content/Content'
import {Footer} from './components/Footer/Footer'
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Banner />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
