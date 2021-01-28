import React from 'react'

const navbar = (props) => {

  

  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">Memownia</a>
        <form className="d-flex">
          <a className="navbar-brand" href="/">Dodaj Mema</a>
          <input className="form-control me-2" type="search" placeholder="Wyszukaj mema" aria-label="Search" />
          <button className="btn btn-light" type="submit">Szukaj</button>
        </form>
      </div>
    </nav>
  )
}

export default navbar