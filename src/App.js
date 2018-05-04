import React, { Component } from 'react';
import './App.css';
import Child1 from './components/Child1/Child1';
import Child2 from './components/Child2/Child2';
import Child3 from './components/Child3/Child3';
import { connect } from "react-redux";
import {childrenFetched} from "./actions";
import {Names} from "./classes/Names";




class App extends Component {

    names;

    constructor(props) {
        super(props);
        this.names = new Names();

    }

    componentDidMount() {
        this.props.childrenFetched(['child1', 'child2', 'child3']);
    }


  render() {
    return (
      <div className="App">
          <Child1 children={this.props.children}/>
          <Child2/>
          <Child3/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        children: state.children
    }
};
const mapDispatchToProps = { childrenFetched };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
