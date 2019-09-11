import React from 'react';
import './App.css';

import SeeScript from 'seescript-dev'



class App extends React.Component {
  componentDidMount() {
    SeeScript.Connect("svg-root")
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
