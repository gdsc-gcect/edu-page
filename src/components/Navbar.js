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
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{width:"100%"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" onClick={st}>CODE LIBRARY</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={navexpand}>
      <span className="navbar-toggler-icon"></span>
      
      
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={st}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/" onClick={st}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" onClick={st}>About us</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Programming
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/programming/c" onClick={st}>C</Link></li>
            <li><Link className="dropdown-item" to="/programming/CPP" onClick={st}>C++</Link></li>
            <li><Link className="dropdown-item" to="/programming/python" onClick={st}>Python</Link></li>
            <li><Link className="dropdown-item" to="/programming/java" onClick={st}>Java</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/programming" onClick={st} style={{color:"#280e8f"}}>View</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            DSA
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/dsa/array" onClick={st}>Array</Link></li>
            <li><Link className="dropdown-item" to="/dsa/linked" onClick={st}>Linked List</Link></li>
            <li><Link className="dropdown-item" to="/dsa/stack"onClick={st}>Stack</Link></li>
            <li><Link className="dropdown-item" to="/dsa/queue"onClick={st}>Queue</Link></li>
            <li><Link className="dropdown-item" to="/dsa/binary"onClick={st}>Binary Tree</Link></li>
            <li><Link className="dropdown-item" to="/dsa/binarysearchtree" onClick={st}>BinarySearchTree</Link></li>
            <li><Link className="dropdown-item" to="/dsa/heap"onClick={st}>Heap</Link></li>
            <li><Link className="dropdown-item" to="/dsa/hashing" onClick={st}>Hashing</Link></li>
            <li><Link className="dropdown-item" to="/dsa/dynamic" onClick={st}>Dynamic</Link></li>
   

            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/dsa" style={{color:"#280e8f"}}>All Data Structures</Link></li>
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

