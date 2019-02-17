import React, { Component } from 'react';
import './App.css';
import GithubData from './containers/GithubData'

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <GithubData />
        </section>
      </div>
    );
  }
}

export default App;
