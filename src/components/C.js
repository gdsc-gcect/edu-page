import React,{useState} from "react";
import { Link } from "react-router-dom";

export default function C() {
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
              <h6 className="spanh2">
              <h2 className="python">C</h2>
              </h6>
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
                </li><hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/programming/C/Coperator">
                    Operator 
                  </Link>
                </li><hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/programming/C/Loop">
                    C loop
                  </Link>
                </li><hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/programming/C/Function">
                   C Functions
                  </Link>
                </li><hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/">
                  C Scope Rules
                  </Link>
                </li><hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/programming/C/Variables">
                    Variables
                  </Link>
                </li><hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/">
                    Lists
                  </Link>
                </li><hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/">
                    Tuples
                  </Link>
                </li><hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/">
                    Dictionary
                  </Link>
                </li><hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/">
                    Modules
                  </Link>
                </li><hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/">
                    Functions
                  </Link>
                </li><hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/">
                    OOP with Python
                  </Link>
                </li><hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/">
                    File Handling
                  </Link>
                </li><hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/">
                    Recursion
                  </Link>
                </li><hr className="featurette-divider" style={{ color: "#a6a6af" }} />
              </ul>
            </div>
          </div>
        </div>
        <div className="program-que-ans">
          { <h3>What is C?</h3> }
         
            <p className="MsoNormal">
            C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.

It is a very popular language, despite being old.

C is strongly associated with UNIX, as it was developed to write the UNIX operating system.

            
            
            </p>
          
          <p>&nbsp;</p>
          <h3>Characteristics of C Language</h3>
          <ul>
            <li className="MsoNormal">Python is simple and easy to understand.</li>
            <li>
            Small size



           
Pointer implementation - extensive use of pointers for memory, array, structures, and functions.
            </li >
            <li className="MsoNormal">Extensive use of function calls</li>
            <li className="MsoNormal">
            Loose typing - unlike PASCAL
            </li>
            <li className="MsoNormal">
            Structured language
            </li>
            <li className="MsoNormal"> Low level (BitWise) programming is readily available</li>
            <li className="MsoNormal">Pointer implementation - extensive use of pointers for memory, array, structures, and functions.</li>
          </ul>
          <p>&nbsp;</p>
          <h3>Importance of C language</h3>
          
            <p className="MsoNormal">
            It is a robust language with a rich set of built-in functions and operators that can be used to write any complex program.<br></br>
The C compiler combines the capabilities of an assembly language with features of a high-level language.<br></br>
Programs written in C are efficient and fast. This is due to its variety of data type and powerful operators.<br></br>
It is many time faster than BASIC.<br></br>
C is highly portable this means that programs once were written can be run on another machine with little or no modification.<br></br>
Another important feature of the C program is its ability to extend itself.<br></br>
A-C program is basically a collection of functions that are supported by C library. We can also create our own function and add it to C library.<br></br>
There are  32 keywords; several standard functions are available which can be used for developing a program.<br></br>
C language is the most widely used language in operating systems and embedded system development today.
            
          </p>
        </div>
      </div>
    </div>
  );
}
