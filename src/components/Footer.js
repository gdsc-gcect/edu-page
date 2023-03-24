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
    <p className="float-end"><Link onClick={scrollToTop} ><div className="fa fa-arrow-circle-o-up" aria-hidden="true"/>	</Link></p>
    <p>&copy; 2017–2021 Company, Inc. &middot; <a href="/">Privacy</a> &middot; <a href="/">Terms</a></p>
  </footer>

    </div>
  )
}
