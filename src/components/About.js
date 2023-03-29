import React from 'react'
import ab from './Education.jpg';
import bc from './SelfLearning.jpg'
import cd from './No.jpg'
import arghya from './Arghya.jpg'
import shreyasi from './Shreyasi.jpg'
import saheli from './Saheli.jpg'
import alapan from './Alapan.jpg'
export default function About() {
  return (
    <>
      <div className='about-page' style={{ width: "100%" }}>
        <div style={{ margin: "50px 0px", width: "100%", padding: "0", background: "black", overflow: "hidden", position: "relative", textAlign: "center", color: "white" }}>
          <img src={ab} className="d-block w-100 " alt="..." style={{ opacity: "0.4", objectFit: "cover", height: "100%" }} />
          <div className='center-text'>“Your talent determines what you can do. Your motivation determines how much you're willing to do. Your attitude determines how well you do it.”</div>
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
          
        </div>
      </div>
      <div className="container marketing" style={{ width: "100%" }}>
        <div className="row">
          <div className="col-lg-3">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={shreyasi} alt="..."></img>
            <h2>Shreyasi Debnath</h2>
            <p>Web Developer || Competitive Programmer || IT Undergrad'25</p>
            <div><ul className='about-links'>
              <li><a className="fa fa-linkedin" href="https://www.linkedin.com/in/shreyasidebnath/" target="_blank" rel="noreferrer"> </a></li>
              <li><a className="fa fa-github" href="https://github.com/ShreyasiDebnath" target="_blank" rel="noreferrer"> </a></li>
            </ul></div>
          </div>
          <div className="col-lg-3">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={arghya} alt="..." style={{ backgroundColor: "black" }}></img>
            <h2>Arghyadip Dhara</h2>
            <p>Web Developer || Full Stack Developer || IT Undergrad'25 || Tech Enthusiast || Learner</p>
            <div><ul className='about-links'>
              <li><a className="fa fa-linkedin" href="https://www.linkedin.com/in/arghyadip-dhara-68a3b51b7/" target="_blank" rel="noreferrer"> </a></li>
              <li><a className="fa fa-github" href="https://github.com/arghyadip700" target="_blank" rel="noreferrer"> </a></li>
            </ul></div>
          </div>
          <div className="col-lg-3">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={alapan} alt="..."></img>
            <h2>Alapan Das</h2>
            <p>Hey, I am Alapan Das, aspiring Frontend and Machine-Learning Developer from India. We can connect through Linkedin and Twitter below.
            </p>
            <div>

              <ul className='about-links'>
                <li><a className="fa fa-linkedin" href="https://www.linkedin.com/in/alapandas3/" target="_blank" rel="noreferrer"> </a></li>
                <li><a className="fa fa-github" href="https://github.com/AlapanDas" target="_blank" rel="noreferrer"> </a></li>
              </ul>

            </div>
          </div>
          <div className="col-lg-3">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={saheli} alt="..."></img>
            <h2>Saheli Pal</h2>
            <p>Web Developer || Tech Enthusiast || IT Undergrad'25 || Learner</p>
            <div><ul className='about-links'>
              <li><a className="fa fa-linkedin" href="https://www.linkedin.com/in/saheli-pal-0932671bb/" target="_blank" rel="noreferrer"> </a></li>
              <li><a className="fa fa-github" href="https://github.com/sahelipal1" target="_blank" rel="noreferrer"> </a></li>
            </ul></div>
          </div>
        </div>
      </div>




    </>
  )
}
