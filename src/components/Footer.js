import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
  
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  

  return (
    <div>
         <hr className="featurette-divider"/>
        
        <footer className="container">
    <div className="float-end"><Link onClick={scrollToTop} ><div className="fa fa-arrow-circle-o-up" aria-hidden="true"/>	</Link></div>
    <div>&copy; Code Library &middot; <a href="/">Privacy</a> &middot; <a href="/">Terms</a></div>
  </footer>

    </div>
  )
}
