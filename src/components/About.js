import React from 'react'
import ab from './Education.jpg';
import bc from './SelfLearning.jpg'
import cd from './No.jpg'
import cat from'./cat.png'
import java from './java.webp';
export default function About() {
  return (
    <>
      <div className='about-page' style={{ width: "100%" }}>
        <div style={{ margin: "50px 0px", width: "100%", padding: "0", background: "black", overflow: "hidden",position:"relative",textAlign:"center",color:"white" }}>
          <img src={ab} className="d-block w-100 "  alt="..." style={{ opacity: "0.4",objectFit:"cover" ,height:"100%"}} />
          <div className='center-text'>lyjhgfyjhgj,yhgjmnbgvjhmngbgvjhgnfvhtngbfvhgb bnv gkjnvb </div>
        </div>
        <div className='feat'>
          <hr className="featurette-divider" />
          <div className="row featurette" style={{ width: "100%" }}>
            <div className="col-md-7">
              <h2 className="featurette-heading">Why Code Library?</h2>
              <p className="lead">There was a certain gap in the online programming learning fields in the internet. The available contents appear complex to self-learning students. So, we decided to create this platform to help student who want to learn themselves.</p>
            </div>
            <div className="col-md-5">
              <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={bc} alt="..."></img>
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette" style={{ width: "100%" }}>
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">No prerequisites needed?</h2>
              <p className="lead">No prerequisites are needed here to learn programming. You just need to start and make some time to come to the website and learn from the <strong>ZERO</strong>.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={cd} alt="..."></img>
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette" style={{ width: "100%" }}>
            <div className="col-md-7">
              <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
              <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
            </div>
            <div className="col-md-5">
              <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={java} alt="..."></img>
            </div>
          </div>
        </div>
        <hr className="featurette-divider" />
      </div>
      <div className="container marketing" style={{ width: "100%" }}>
        <div className="row">
          <div className="col-lg-3">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={java} alt="..."></img>
            <h2>Heading</h2>
            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            <div><ul className='about-links'>
              <li><a className="fa fa-linkedin" href="/" target="_blank" rel="noreferrer"> </a></li>
              <li><a className="fa fa-github" href="/" target="_blank" rel="noreferrer"> </a></li>
              <li><a className="fa fa-envelope" href="/" target="_blank" rel="noreferrer"> </a></li>
            </ul></div>
          </div>
          <div className="col-lg-3">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={cat} alt="..."style={{backgroundColor:"black"}}></img>
            <h2>Heading</h2>
            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            <div><ul className='about-links'>
              <li><a className="fa fa-linkedin" href="/" target="_blank" rel="noreferrer"> </a></li>
              <li><a className="fa fa-github" href="/" target="_blank" rel="noreferrer"> </a></li>
              <li><a className="fa fa-envelope" href="/" target="_blank" rel="noreferrer"> </a></li>
            </ul></div>
          </div>
          <div className="col-lg-3">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={java} alt="..."></img>
            <h2>Heading</h2>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <div>

              <ul className='about-links'>
                <li><a className="fa fa-linkedin" href="/" target="_blank" rel="noreferrer"> </a></li>
                <li><a className="fa fa-github" href="/" target="_blank" rel="noreferrer"> </a></li>
                <li><a className="fa fa-envelope" href="/" target="_blank" rel="noreferrer"> </a></li>
              </ul>

            </div>
          </div>
          <div className="col-lg-3">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={java} alt="..."></img>
            <h2>Heading</h2>
            <p>And lastly this, the third column of representative placeholder content.This time, we've moved on to the second column.</p>
            <div><ul className='about-links'>
              <li><a className="fa fa-linkedin" href="/" target="_blank" rel="noreferrer"> </a></li>
              <li><a className="fa fa-github" href="/" target="_blank" rel="noreferrer"> </a></li>
              <li><a className="fa fa-envelope" href="/" target="_blank" rel="noreferrer"> </a></li>
            </ul></div>
          </div>
        </div>
      </div>




    </>
  )
}
