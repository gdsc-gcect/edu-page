import React from 'react'
// import gate from './gate.jpeg';
import code from './code.png';
import c from './c.jpg';
import python from './python.png';
import cpp from './cpp.png';
import java from './java.webp';
import Algo from './Algorithms.jpg';
import el from './el.webp';
import big from './bigstock.webp';
import be from './BE.png';
import pro from './Program.jpg'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
    <div className='all-element'>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{margin:" 0px", width:"100%",padding:"0px"}}>
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active" >
                <img src={be} className="d-block w-100 " height="520" alt="..."  />
            </div>
            <div className="carousel-item" >
                <img src={el} className="d-block w-100 " height="520" alt="..."   />
            </div>
        <div className="carousel-item" >
             <img src={big} className="d-block w-100 " height="520" alt="..."  />
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
    <div className='element'>
      <div className="card"  >
      <img src={c} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">C Programming Language</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Explore</a>
      </div>
    </div>
    <div className="card"  >
      <img src={java} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">JAVA</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Explore</a>
      </div>
    </div>
    <div className="card"  >
      <img src={cpp} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">C++</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Explore</a>
      </div>
    </div>
    <div className="card"  >
      <img src={python} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Python</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/programming/python" className="btn btn-primary">Explore</Link>
      </div>
    </div>
    </div>
    <div className='element'>
      <div className="card"  >
      <img src={Algo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Data Structure and Algorithms</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/dsa" className="btn btn-primary">Explore</Link>
      </div>
    </div>
    <div className="card"  >
      <img src={pro} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Programming</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/programming" className="btn btn-primary">Explore</a>
      </div>
    </div>
    <div className="card"  >
      <img src={code} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Explore</a>
      </div>
    </div>
    <div className="card"  >
      <img src={code} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Explore</a>
      </div>
    </div>
    </div>
    <div className='element'>
      <div className="card"  >
      <img src={code} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Explore</a>
      </div>
    </div>
    <div className="card"  >
      <img src={code} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Explore</a>
      </div>
    </div>
    <div className="card"  >
      <img src={code} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Explore</a>
      </div>
    </div>
    <div className="card"  >
      <img src={code} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Explore</a>
      </div>
    </div>
    </div>
    </div>
   
</>
  );
}
