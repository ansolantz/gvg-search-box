import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import WordInfoPage from './pages/WordInfoPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Switch>
          <Route exact path='/' component={SearchPage}></Route>
          <Route exact path='/:lang/:word' component={WordInfoPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
