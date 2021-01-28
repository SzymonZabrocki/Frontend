import React, { Component } from 'react'
// import axios from 'axios'
import Navbar from './components/Navbar/Navbar'

import MainPage from './containers/MainPage/MainPage'

import AddMeme from './components/AddMeme/AddMeme'

class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <MainPage/>
        <AddMeme/>
      </div>
    );
  }
}

export default App;