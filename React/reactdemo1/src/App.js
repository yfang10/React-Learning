import React, { Component } from 'react';


import Home from './components/Home.js';


import News from './components/News.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="App">
      
      {/* <Home /> */}

      <News />

      
      
   </div>
    )
  }
}

export default App;