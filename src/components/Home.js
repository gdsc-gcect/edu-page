import React from 'react'
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';
// import gate from './gate.jpeg';
import code from './code.png';
import c from './c.jpg';
import python from './python.png';
import cpp from './cpp.png';
import java from './java.webp';
import Algo from './Algorithms.jpg';
import el from './el.webp';
import big from './img.jpg';
import be from './BE.png';
import pro from './Program.jpg'
import { Link } from 'react-router-dom';
import { useRef } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  AOS.init({
    once: true,
  });
  const titleRef = useRef();
  function handleClick() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div className='front' style={{ margin: "57px 0px 0px 0px" }}>
        <div className='heading'  >
          <div style={{ display: "flex" }}><h3 style={{ marginRight: "5px" }}>Welcome to</h3><h2 style={{ color: "red" }}  >CODE LIBRARY</h2></div>
          <p style={{ display:"flex",justifyContent:"center",padding:"1px"}}>C,C++,JAVA,PYTHON,</p>
          <p style={{ display:"flex",justifyContent:"center",padding:"1px"}}>DATA STRUCTURE AND ALGORITHM</p>
          <div style={{margin:"15px"}}>
            <button onClick={handleClick} className="head-btn">Get Started</button>
          </div></div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ margin: " 0px", padding: "0px" }}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{ display: "none" }}></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{ display: "none" }}></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" style={{ display: "none" }}></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" >

              <img src={big} className="d-block w-100 " height="520" alt="..." />

            </div>
            <div className="carousel-item" >
              <img src={el} className="d-block w-100 " height="520" alt="..." />
            </div>
            <div className="carousel-item" >
              <img src={be} className="d-block w-100 " height="520" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{ display: "none" }}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{ display: "none" }}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='all-element' ref={titleRef}>

        <div className='element-name'>Programming Language</div>
        <div className='element'>
          <div className='Two-card'>
            <Link to="/programming/c" className="card" data-aos="fade-up"

              data-aos-duration="1200"
              data-aos-offset="150"
              data-aos-easing="ease-in-sine"
            >
              <img src={c} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">C Programming Language</h5>
                <p className="card-text"></p>
                <button href="/programming/c" className="btn btn-primary">Explore</button>
              </div>
            </Link>
            <Link to="/" className="card" data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-offset="150"
              data-aos-easing="ease-in-sine"
            >
              <img src={java} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">JAVA</h5>
                <p className="card-text"></p>
                <button href="/" className="btn btn-primary">Explore</button>
              </div>
            </Link>
          </div>
          <div className='Two-card'>
            <Link to='/programming/Cpp' className="card" data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-offset="150"
              data-aos-easing="ease-in-sine" >
              <img src={cpp} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">C++</h5>
                <p className="card-text"></p>
                <button href="/" className="btn btn-primary">Explore</button>
              </div>
            </Link>
            <Link to="/programming/python" className="card" data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-offset="150"
              data-aos-easing="ease-in-sine"
            >
              <img src={python} className="card-img-top" alt="..." />
              <div className="card-body" >
                <h5 className="card-title">Python</h5>
                <p className="card-text"></p>
                <button to="/programming/python" className="btn btn-primary">Explore</button>
              </div>
            </Link>
          </div>
        </div>
        <div className='element-name'>Programming Language</div>
        <div className='element'>
          <div className='Two-card'>
            <Link to="/dsa" className="card" data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-offset="150"
              data-aos-easing="ease-in-sine" >
              <img src={Algo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Data Structure and Algorithms</h5>
                <p className="card-text"></p>
                <button to="/dsa" className="btn btn-primary">Explore</button>
              </div>
            </Link>
            <Link to="/programming" className="card" data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-offset="150"
              data-aos-easing="ease-in-sine">
              <img src={pro} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Programming</h5>
                <p className="card-text"></p>
                <button to="/programming" className="btn btn-primary">Explore</button>
              </div>
            </Link>
          </div>
          <div className='Two-card'>
            <Link to="/" className="card" data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-offset="150"
              data-aos-easing="ease-in-sine" >
              <img src={code} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text"></p>
                <button href="/" className="btn btn-primary">Explore</button>
              </div>
            </Link>
            <Link to="/" className="card" data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-offset="150"
              data-aos-easing="ease-in-sine" >
              <img src={code} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text"></p>
                <button href="/" className="btn btn-primary">Explore</button>
              </div>
            </Link>
          </div>
        </div>
      </div>




    </>
  );
}
