import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={UserInput} />
        <Route path="/output/:userId" component={UserOutput} />
      </div>
        </BrowserRouter>
    );
  }
}

export default App;
