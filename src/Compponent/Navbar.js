import React from 'react'
import Form from './Form'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
    {/* <div classNameName="spinner-border text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div> */}
  <div className="container-fluid">
        <img src="https://www.freepnglogos.com/uploads/dominos-png-logo/blue-wave-pressure-washing-dominos-png-logo-0.png" alt="" height="10%" width="10%"/>
    <a className="navbar-brand" href="#"><b id='bold'>Dominos'Pizaa</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Our menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Dominos store</a>
        </li>
        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
        
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button type="button" className="btn btn-danger">Pizza</button>
      </form>
    </div>
      {/* <div className="spinner-border text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div> */}
  </div>
</nav>
    </div>
  )
}
