import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';

class App extends Component {
  state={ isLoggedIn:false };

  AuthViews(){
    if(this.state.isLoggedIn){
      return <Redirect to='/Login' />
    }
    else{
      return <Redirect to='/Login' />
    }
  }
  render() {
    return (
      <div className="App">gfhgf
      </div>
    );
  }
}

export default App;
