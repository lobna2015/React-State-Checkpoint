import React, { Component } from 'react'
import Child1 from './Components/Child1';
import Child2 from './Components/Child2';
import './App.css';
import './index.css';

export default class App2 extends Component {

state = {
 

  shows1: true,
  shows2 :true,
};

// shouldComponentUpdate(nextState, nextProps){
// return !this.state.shows;
// }

  render() {
    return (
      <div className="app2">
<h1>List Of Student</h1>
        <div className="container">
  
      { this.state.shows1 && <Child2/>}
      <button onClick={ ()=> this.setState({shows1 : !this.state.shows1 })}>toggleShowProfileLobna</button>
      { this.state.shows2 && <Child1/>}
      <button onClick={ ()=> this.setState({shows2 : !this.state.shows2 })}>toggleShowProfileSami</button>
      </div>
      </div>
    )
  }
}
