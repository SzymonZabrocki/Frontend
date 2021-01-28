import React, { Component } from 'react'
// import axios from 'axios'
import Navbar from './components/Navbar/Navbar'

import MainPage from './containers/MainPage/MainPage'

class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <MainPage/>
      </div>
    );
  }
}

export default App;