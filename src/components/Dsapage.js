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
      <div className='dsa-item' id='' href='/dsa/linked'>
       <Link className='items-dsa' to='/dsa/linked'> LINKED LIST</Link>
      </div>
      <div className='dsa-item' id='' href='/dsa/stack'>
       <Link className='items-dsa' to='/dsa/stack'> STACK</Link>
      </div>
      <div className='dsa-item' id='' href='/dsa/queue'>
       <Link className='items-dsa' to='/dsa/queue'> QUEUE</Link>
      </div>
      <div className='dsa-item' id='' href='/'>
       <a className='items-dsa' href='/dsa/binary'> BINARY TREE</a>
      </div>
      
      <div className='dsa-item' id='' href='/dsa/binarysearchtree'>
       <Link className='items-dsa' to='/dsa/binarysearchtree'> BINARY SEARCH TREE</Link>
      </div>
      <div className='dsa-item' id='' href='/'>
       <a className='items-dsa' href='/dsa/heap'> HEAP</a>
      </div>
      <div className='dsa-item' id='' href='/dsa/hashing'>
       <Link className='items-dsa' to='/dsa/hashing'> HASHING</Link>
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
