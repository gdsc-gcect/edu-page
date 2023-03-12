import React from 'react'
import el from './el.webp';
import big from './bigstock.webp';
import be from './BE.png';
import git from './githublogo.png'
import linkdin from './LinkedIn_icon_circle.svg.png'
import email from './emaillogo.png'
import java from './java.webp';
export default function About() {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={be} className="d-block w-100" alt="..."  />
            </div>
            <div className="carousel-item">
                <img src={el} className="d-block w-100" alt="..."   />
            </div>
        <div className="carousel-item">
             <img src={big} className="d-block w-100" alt="..."  />
        </div>
    </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    <div className="container marketing" style={{marginTop:"90px"}}>
        <div className="row">
            <div className="col-lg-3">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={java}></img>
                <h2>Heading</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                <p><ul className='about-links'>
                        <li><a href="https://www.linkedin.com/in/shreyasidebnath/"target="_blank"> <img className="bd-placeholder-img rounded-circle" width="30" height="30" src={email}/></a></li>
                        <li><a href="https://github.com/ShreyasiDebnath/"target="_blank"> <img className="bd-placeholder-img rounded-circle" width="30" height="30" src={git}/> </a></li>
                        <li><a href = "mailto:shreyasidebnath07@gmail.com"target="_blank"> <img className="bd-placeholder-img rounded-circle" width="30" height="30" src={linkdin}/></a></li>
                    </ul></p>
            </div>
            <div className="col-lg-3">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={java}></img>
                <h2>Heading</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                <p><ul className='about-links'>
                        <li><a href="#"target="_blank"> <img className="bd-placeholder-img rounded-circle" width="30" height="30" src={email}/></a></li>
                        <li><a href="#"target="_blank"> <img className="bd-placeholder-img rounded-circle" width="30" height="30" src={git}/> </a></li>
                        <li><a href = "#"target="_blank"> <img className="bd-placeholder-img rounded-circle" width="30" height="30" src={linkdin}/></a></li>
                    </ul></p>
            </div>
            <div className="col-lg-3">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={java}></img>
                <h2>Heading</h2>
                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                <p>
                
                    <ul className='about-links'>
                        <li><a href="#"target="_blank"> <img className="bd-placeholder-img rounded-circle" width="30" height="30" src={email}/></a></li>
                        <li><a href="#"target="_blank"> <img className="bd-placeholder-img rounded-circle" width="30" height="30" src={git}/> </a></li>
                        <li><a href = "#"target="_blank"> <img className="bd-placeholder-img rounded-circle" width="30" height="30" src={linkdin}/></a></li>
                    </ul>
                   
                    </p>
            </div>
            <div className="col-lg-3">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={java}></img>
                <h2>Heading</h2>
                <p>And lastly this, the third column of representative placeholder content.This time, we've moved on to the second column.</p>
                <p><ul className='about-links'>
                        <li><a href="#"target="_blank"> <img className="bd-placeholder-img rounded-circle" width="30" height="30" src={email}/></a></li>
                        <li><a href="#"target="_blank"> <img className="bd-placeholder-img rounded-circle" width="30" height="30" src={git}/> </a></li>
                        <li><a href = "#"target="_blank"> <img className="bd-placeholder-img rounded-circle" width="30" height="30" src={linkdin}/></a></li>
                    </ul></p>
             </div>
        </div>
    </div>
    <hr className="featurette-divider"/>
    <div className="row featurette">
      <div className="col-md-7">
            <h2 className="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
        </div>
      <div className="col-md-5">
         <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={java}></img>
        </div>
    </div>
    <hr className="featurette-divider"/>
    <div className="row featurette">
      <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
        </div>
      <div className="col-md-5 order-md-1">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={java}></img>
      </div>
    </div>
    <hr className="featurette-divider"/>
    <div className="row featurette">
      <div className="col-md-7">
         <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
      </div>
      <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={java}></img>
      </div>
    </div>
   

    

</>
  )
}
