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
      <Link className='dsa-item'  to='/dsa/array'>
       <div className='items-dsa' to='/dsa/array'> ARRAY</div>
      </Link>
      <Link className='dsa-item'  to='/dsa/linked'>
       <div className='items-dsa' to='/dsa/linked'> LINKED LIST</div>
      </Link>
      <Link className='dsa-item'  to='/dsa/stack'>
       <div className='items-dsa' to='/dsa/stack'> STACK</div>
      </Link>
      <Link className='dsa-item'  to='/dsa/queue'>
       <div className='items-dsa' to='/dsa/queue'> QUEUE</div>
      </Link>
      <Link className='dsa-item'  to='/dsa/binary'>
       <div className='items-dsa' to='/dsa/binary'> BINARY TREE</div>
      </Link>
      
      <Link className='dsa-item'  to='/dsa/binarysearchtree'>
       <div className='items-dsa' to='/dsa/binarysearchtree'> BINARY SEARCH TREE</div>
      </Link>
      <Link className='dsa-item'  to='/dsa/heap'>
       <div className='items-dsa' to='/dsa/heap'> HEAP</div>
      </Link>
      <Link className='dsa-item'  to='/dsa/hashing'>
       <div className='items-dsa' to='/dsa/hashing'> HASHING</div>
      </Link>
      <Link className='dsa-item'  to='/dsa/dynamic'>
       <div className='items-dsa' to='/dsa/dynamic'> DYNAMIC PROGRAMMING</div>
      </Link>
      </div>
    </div>
   
    </>
  )
}
