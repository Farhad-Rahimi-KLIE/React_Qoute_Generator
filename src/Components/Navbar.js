import React from 'react'

// import { Link } from 'react-router-dom'
const Navbar = (props) => {
  return (
    <div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10-mx-auto">
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
  <a className="navbar-brand" href="/">{props.title}</a>
  
  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <a className="nav-link" href="/">{props.home}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">{props.about}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">{props.services}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">{props.Agent}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">{props.Contact}</a>
    </li>
  </ul>
</nav>
    </div>
    </div>
        </div>
      </div>
  )
}

export default Navbar
