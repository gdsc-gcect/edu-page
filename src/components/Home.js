import React from 'react'
// import gate from './gate.jpeg';
import code from './code.png';
import c from './c.jpg';
import python from './python.png';
import cpp from './cpp.png';
import java from './java.webp';
import algo from './Algorithms.jpg';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
    <div className='all-element'>
    <div className='element'>
      <div className="card"  >
      <img src={c} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Explore</a>
      </div>
    </div>
    <div className="card"  >
      <img src={java} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Explore</a>
      </div>
    </div>
    <div className="card"  >
      <img src={cpp} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Explore</a>
      </div>
    </div>
    <div className="card"  >
      <img src={python} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Explore</a>
      </div>
    </div>
    </div>
    <div className='element'>
      <div className="card"  >
      <img src={algo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/dsa" className="btn btn-primary">Explore</Link>
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
