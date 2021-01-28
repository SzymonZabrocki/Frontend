import React, { Component } from 'react'
import Modal from '../Modal/Modal'
import AddMeme from '../AddMeme/AddMeme'

class Navbar extends Component {
  state={
    purchasing: false
  }

  purchaseCancleHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    this.setState({purchasing: true})
  }

  render(){
    return (
    <div>
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">Memownia</a>
          <form className="d-flex">
            <a className="navbar-brand" onClick={this.purchaseContinueHandler}>Dodaj Mema</a>
            <input className="form-control me-2" type="search" placeholder="Wyszukaj mema" aria-label="Search" />
            <button className="btn btn-light" type="submit">Szukaj</button>
          </form>
        </div>
      </nav>
      <Modal show={this.state.purchasing} modalClosed={this.purchaseCancleHandler}>
        <AddMeme/>
      </Modal>
    </div>
  )
  }
  
}

export default Navbar