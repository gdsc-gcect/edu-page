import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  
  return (
    <>
    <div className='navbar-fix'>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">EDU-PAGE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Programming
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/dsa" >
            DSA
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/dsa/array">Array</Link></li>
            <li><a className="dropdown-item" href="/">Linked List</a></li>
            <li><a className="dropdown-item" href="/">Stack</a></li>
            <li><a className="dropdown-item" href="/">Queue</a></li>
            <li><a className="dropdown-item" href="/">Binary Tree</a></li>
            <li><a className="dropdown-item" href="/">Binary Search Tree</a></li>
            <li><a className="dropdown-item" href="/">Heap</a></li>
            <li><a className="dropdown-item" href="/">Hashing</a></li>
            <li><a className="dropdown-item" href="/">Graph</a></li>
   

            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/" >Advance Data Structures</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            CS/IT Core Subjects
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div> 
    </>
  );
}

