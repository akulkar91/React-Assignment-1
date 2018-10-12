import React, { Component } from 'react';

import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    name:'Max'
  }

  changeHandler= () => {
    // console.log('executed');
    this.setState({
      name:'Manu'
    })
  }

  inputChangeHandler = (event) => {
    this.setState({
      name:event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <UserInput name={this.state.name} changed={this.inputChangeHandler}/>
        <UserOutput name={this.state.name} click={this.changeHandler}/>
      </div>
    );
  }
}

export default App;
