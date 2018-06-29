import React, { Component } from 'react';
import HelloWorld from './hello_world';
import ReactFun from './react_fun';

export default class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <ReactFun />
      </div>
    );
  }
}
