import React, { Component } from 'react';
import './App.css';
import Child1 from './components/Child1/Child1';
import Child2 from './components/Child2/Child2';
import Child3 from './components/Child3/Child3';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Child1/>
          <Child2/>
          <Child3/>
      </div>
    );
  }
}

export default App;
