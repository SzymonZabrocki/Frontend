import React, { Component } from 'react'
import Modal from '../Modal/Modal'
import AddMeme from '../AddMeme/AddMeme'

class Navbar extends Component {
  state={
    purchasing: false,
    searchFor: ''
  }

  closeModal = () => {
    this.setState({ purchasing: false })
  }

  openModal = () => {
    this.setState({purchasing: true})
  }

  render(){
    return (
    <div>
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">Memownia</a>
          <form className="d-flex">
            <a className="navbar-brand" onClick={this.openModal}>Dodaj Mema</a>
          </form>
        </div>
      </nav>
      <Modal show={this.state.purchasing} modalClosed={this.closeModal}>
        <AddMeme/>
      </Modal>
    </div>
  )
  }
  
}

export default Navbar