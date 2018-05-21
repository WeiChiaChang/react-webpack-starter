import React, { Component } from 'react';
import Kuma from "../images/taiwan-kuma.gif";

class App extends Component {
  render() {
    return (
      <div>
        <img src={Kuma} alt="" height="50" />
        <h1 className="title">My React-Webpack-Starter</h1>
      </div>
    )
  }
}

export default App;