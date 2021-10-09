import React, { Component } from 'react';
import './App.css';
import './css/styles.css';
import MainPage from './pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  }
}

export default App;
