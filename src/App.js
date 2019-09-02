import React, { Component } from 'react';
import gavagaiAPI from './lib/gavagai-api';
import SearchBar from './components/searchBar'

import './App.css';
class App extends Component {
  render(){
    return (
      <div class="container">
        <SearchBar />
      </div>
    );
  }
 
}

export default App;
