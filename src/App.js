import React, { Component } from 'react'
// import axios from 'axios'
import Navbar from './components/Navbar/Navbar'

import MainPage from './containers/MainPage/MainPage'

class App extends Component {

  render() {
    return (
      <div style={{backgroundColor: "#33322e"}}>
        <Navbar/>
        <MainPage/>
      </div>
    );
  }
}

export default App;