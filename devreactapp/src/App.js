import React from 'react';
import './App.css';

const SeeScript = require('seescript-dev')

class App extends React.Component {
  componentDidMount() {
    SeeScript("svg-root")
  }

  render() {
    return (
      <div className="App">
        <div id="svg-root" />
      </div>
    );
  }
}

export default App;
