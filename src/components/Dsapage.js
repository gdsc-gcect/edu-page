import React from 'react'
import dsal from './Algorithms.jpg';
import bg from './bg.jpg'
import { Link } from 'react-router-dom';
export default function Dsapage() {
  return (
    <>
    <div className='dsa-page'>
    <div className='main-side-heading' style={{backgroundImage:`url(${bg})`}}>
      <div><img src={dsal} className="side-img" alt="..."/></div>
    </div>
    <div className='dsa-element'>
      <div className='dsa-item' id='' href='/dsa/array'>
       <Link className='items-dsa' to='/dsa/array'> ARRAY</Link>
      </div>
      <div className='dsa-item' id='' href='/'>
       <a className='items-dsa' href='/'> LINKED LIST</a>
      </div>
      <div className='dsa-item' id='' href='/'>
       <a className='items-dsa' href='/'> STACK</a>
      </div>
      <div className='dsa-item' id='' href='/'>
       <a className='items-dsa' href='/'> QUEUE</a>
      </div>
      <div className='dsa-item' id='' href='/'>
       <a className='items-dsa' href='/'> BINARY TREE</a>
      </div>
      
   
    
      <div className='dsa-item' id='' href='/'>
       <a className='items-dsa' href='/'> BINARY SEARCH TREE</a>
      </div>
      <div className='dsa-item' id='' href='/'>
       <a className='items-dsa' href='/'> HEAP</a>
      </div>
      <div className='dsa-item' id='' href='/'>
       <a className='items-dsa' href='/'> HASHING</a>
      </div>
      <div className='dsa-item' id='' href='/'>
       <a className='items-dsa' href='/'> GRAPH</a>
      </div>
      <div className='dsa-item' id='' href='/'>
       <a className='items-dsa' href='/'> DYNAMIC PROGRAMMING</a>
      </div>
      </div>
    </div>
   
    </>
  )
}
