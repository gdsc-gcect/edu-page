import React from 'react'
import ab from './aboutus.jpg';
import email from './emaillogo.png'
import java from './java.webp';
export default function About() {
  return (
    <>
    <div className='about-page' style={{width:"100%",padding:"5px"}}>
        <div   style={{margin:"50px 0px", width:"100%",padding:"0", background: "black", overflow: "hidden"}}>
            <img src={ab} className="d-block w-100 " height="520" alt="..."  style={{opacity:"0.4"}}/>    
    </div>
    <div className='feat'>
    <hr className="featurette-divider"/>
    <div className="row featurette"style={{width:"100%"}}>
      <div className="col-md-7">
            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It will blow your mind.</span></h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
        </div>
      <div className="col-md-5">
         <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={java} alt="..."></img>
        </div>
    </div>
    <hr className="featurette-divider"/>
    <div className="row featurette" style={{width:"100%"}}>
      <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Oh yeah, it is that good. <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
        </div>
      <div className="col-md-5 order-md-1">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={java} alt="..."></img>
      </div>
    </div>
    <hr className="featurette-divider"/>
    <div className="row featurette" style={{width:"100%"}}>
      <div className="col-md-7">
         <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
      </div>
      <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={java} alt="..."></img>
      </div>
      </div>
    </div>
    <hr className="featurette-divider"/>
    </div>
    <div className="container marketing" style={{width:"100%"}}>
        <div className="row">
            <div className="col-lg-3">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={java} alt="..."></img>
                <h2>Heading</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                <div><ul className='about-links'>
                <li><a  className="fa fa-linkedin" href="/" target="_blank"rel="noreferrer"> </a></li>
                        <li><a className="fa fa-github" href="/"target="_blank"rel="noreferrer"> </a></li>
                        <li><a href = "/"target="_blank"rel="noreferrer"> <img className="fa fa-email"  src={email} alt="..."/></a></li>
                    </ul></div>
            </div>
            <div className="col-lg-3">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={java} alt="..."></img>
                <h2>Heading</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                <div><ul className='about-links'>
                <li><a  className="fa fa-linkedin" href="/" target="_blank"rel="noreferrer"> </a></li>
                        <li><a className="fa fa-github" href="/"target="_blank"rel="noreferrer"> </a></li>
                        <li><a href = "/"target="_blank"rel="noreferrer"> <img className="fa fa-email"  src={email} alt="..."/></a></li>
                    </ul></div>
            </div>
            <div className="col-lg-3">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={java}  alt="..."></img>
                <h2>Heading</h2>
                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                <div>
                
                    <ul className='about-links'>
                        <li><a  className="fa fa-linkedin" href="/" target="_blank"rel="noreferrer"> </a></li>
                        <li><a className="fa fa-github" href="/"target="_blank"rel="noreferrer"> </a></li>
                        <li><a href = "/"target="_blank"rel="noreferrer"> <img className="fa fa-email"  src={email} alt="..."/></a></li>
                    </ul>
                   
                    </div>
            </div>
            <div className="col-lg-3">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={java} alt="..."></img>
                <h2>Heading</h2>
                <p>And lastly this, the third column of representative placeholder content.This time, we've moved on to the second column.</p>
                <div><ul className='about-links'>
                <li><a  className="fa fa-linkedin" href="/" target="_blank"rel="noreferrer"> </a></li>
                        <li><a className="fa fa-github" href="/"target="_blank"rel="noreferrer"> </a></li>
                        <li><a href = "/"target="_blank"rel="noreferrer"> <img className="fa fa-email"  src={email} alt="..."/></a></li>
                    </ul></div>
             </div>
        </div>
    </div>
   

    

</>
  )
}
