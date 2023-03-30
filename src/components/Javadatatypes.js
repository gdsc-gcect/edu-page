import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Jdata() {
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
                
                <h2 className="java">JAVA</h2>
              </div>

            </div>
            <div className="leftmenu">
              <ul>
                <li>
                  <Link
                    className="lan-link"
                    to="/programming/javaoverview"
                  >
                    Java Fundamentals
                  </Link>
                </li>
                <hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link-active" to="/programming/javadatatypes">
                    Data Types and Operators
                  </Link>
                </li>
                <hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/">
                    Conditional and looping Statements
                  </Link>
                </li>
                <hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/">
                    Strings
                  </Link>
                </li>
                <hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/">
                    Errors and Exceptions
                  </Link>
                </li>
                <hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/">
                    Functions
                  </Link>
                </li>
                <hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/">
                    OOP with Python
                  </Link>
                </li>
                <hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/">
                    Recursion
                  </Link>
                </li>
                <hr className="featurette-divider" style={{ color: "#a6a6af" }} />
              </ul>
            </div>
          </div>
        </div>
        <div className="program-que-ans">
          <ul>            
               <h6>Java is a statically-typed programming language, which means that every variable must be declared with its data type before it can be used. 
                     In Java, there are two main categories of data types: primitive and reference types.</h6>
          </ul>
          <p>&nbsp;</p>
          <h3>Primitive data types: </h3>
          <ul>
            <li className="MsoNormal">
            Byte: an 8-bit signed two's complement integer                              
          </li>
            <li className='MsoNormal'>
            Short: a 16-bit signed two's complement integer             
            </li >
            <li className="MsoNormal">int: a 32-bit signed two's complement integer
               long: a 64-bit signed two's complement integer               
          </li>
            <li className="MsoNormal">
            char: a 16-bit Unicode character
            </li>
            <li className="MsoNormal">
            float: a single-precision 32-bit floating-point number
            </li>
            <li className="MsoNormal">
            boolean: a logical type that can have only two values: true or false
            </li>
            <li className="MsoNormal">
               double: a double-precision 64-bit floating-point number

            </li>
          </ul>
          <p>&nbsp;</p>
          <h3>Reference DataType</h3>
          <ul>
            <li className="MsoNormal">
                Reference data types are non-primitive data types that refer to objects. They store the memory address of the object  rather than the object itself. There are four main reference data types in Java:
               
            </li>
            <li className="MsoNormal">
            Enum types: Enums in Java are used to represent a fixed set of values.
            </li>
            <li className="MsoNormal">
            Array types: Arrays are a collection of elements of the same type, and they can be of any primitive or reference type.
            </li>
            <li className="MsoNormal"> Interface types: Interfaces in Java define a set of methods that a class must implement.</li>
            <li className="MsoNormal">
            Class types: Classes in Java define objects that can have their own methods and fields.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
