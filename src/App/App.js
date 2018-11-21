import React, { Component } from 'react';
import './App.css';
// import Login from '../login/login.js'
import Routes from "../routes";

class App extends Component {
  render() {
    return (
      <div>
      <Routes/>
    </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src="https://rsrit.com/wp-content/uploads/2017/12/logo_dark.png" 
      //     alt="Reliable Software" />
      //     <p className="Heading">
      //      WELCOME TO STEMS PORTAL
      //     </p>
      //   </header>
      //   <div className = "container-fluid App-main">
      //   <div className = "row">
      //   <div className = "col-sm-8">
      //   <Login />
      //   </div>
      //   </div>
      //  </div>
      //  </div>
    );
  }
}

export default App;
