import React,{useState} from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [count, setCount] = useState("none");
  const navexpand=() =>{ 
    
    count==="none"?setCount("block"):setCount("none");
    
    
  }
  const st = {
   display:count
    
}
  
  return (
    <>
    <div className='navbar-fix'>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">EDU-PAGE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={navexpand}>
      <span className="navbar-toggler-icon"></span>
      
      
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={st}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" onClick={st}>About us</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Programming
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/" onClick={st}>Action</a></li>
            <li><a className="dropdown-item" href="/" onClick={st}>Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/" onClick={st}>Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            DSA
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/dsa/array" onClick={st}>Array</Link></li>
            <li><a className="dropdown-item" href="/"onClick={st}>Linked List</a></li>
            <li><a className="dropdown-item" href="/"onClick={st}>Stack</a></li>
            <li><a className="dropdown-item" href="/"onClick={st}>Queue</a></li>
            <li><a className="dropdown-item" href="/"onClick={st}>Binary Tree</a></li>
            <li><a className="dropdown-item" href="/"onClick={st}>Binary Search Tree</a></li>
            <li><a className="dropdown-item" href="/"onClick={st}>Heap</a></li>
            <li><a className="dropdown-item" href="/"onClick={st}>Hashing</a></li>
            <li><a className="dropdown-item" href="/"onClick={st}>Graph</a></li>
   

            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/dsa" style={{color:"#280e8f"}}>All Data Structures</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            CS/IT Core Subjects
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/" onClick={st}>Action</a></li>
            <li><a className="dropdown-item" href="/" onClick={st}>Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/" onClick={st}>Something else here</a></li>
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

