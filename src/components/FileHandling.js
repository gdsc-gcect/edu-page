import React,{useState} from "react";
import { Link } from "react-router-dom";
//import py from "./py.png"
export default function PYTHONFundamentals() {
  const [count, setCount] = useState("none");
  const navexpand = () => {

    count === "none" ? setCount("block") : setCount("block");


  }
  const corssactive = () => {

    count === "block" ? setCount("none") : setCount("none");


  }
  const st = {
    display: count,


  }
  return (
    <div>
      <div className="program-page" style={{ margin: "70px 10px 10px 10px" }}>
        <div className="side-lan-small" >
          <div onClick={navexpand}>Related Articles 	<i className="fa fa-chevron-right" aria-hidden="true" />
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </div></div>
        <div className="side-lan" style={st}  >
          <div className='cross' onClick={corssactive}>	<i className="fa fa-times" aria-hidden="true" />
          </div>
          <div id="menu" style={{ width: "100%" }}>
            <div className="leftmenu2">
              <div className="spanh2">
              
                <h2 className="python">C</h2>
              </div>
            </div>
            <div className="leftmenu">
              <ul>
                <li>
                  <Link
                    className="lan-link"
                    to="/programming/C/CFundamentals"
                  >
                    C Fundamentals
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/programming/C/Coperator">
                    Operators
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link-active" to="/programming/C/Loop">
                  C loop
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/programming/C/Function">
                  C Functions
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/programming/C/Variables">
                  Variables
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/programming/C/Error">
                    Errors and Exceptions 
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/programming/C/FileHandling">
                  File Handling
                  </Link>
                </li>
               
                
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
              </ul>
            </div>
          </div>
        </div>
        <div className="program-que-ans">
          <h2><center><u>File Handling in C</u></center></h2>
          <div className="program-full-q">
            
           
            <p>
In programming, we may require some specific input data to be generated several numbers of times. Sometimes, it is not enough to only display the data on the console. The data to be displayed may be very large, and only a limited amount of data can be displayed on the console, and since the memory is volatile, it is impossible to recover the programmatically generated data again and again. However, if we need to do so, we may store it onto the local file system which is volatile and can be accessed every time. Here, comes the need of file handling in C.

<br></br>File handling in C enables us to create, update, read, and delete the files stored on the local file system through our C program. The following operations can be performed on a file.<br></br>

<strong>Creation of the new file<br></br>
Opening an existing file<br></br>
Reading from the file<br></br>
Writing to the file<br></br>
Deleting the file<br></br>
</strong>
 </p>





          </div>
        </div>
      </div>
    </div>
  );
}
