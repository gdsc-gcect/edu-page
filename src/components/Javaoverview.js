import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Javaoverview() {
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
                    className="lan-link-active"
                    to="/programming/javaoverview"
                  >
                    Java Fundamentals
                  </Link>
                </li>
                <hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                <li>
                  <Link className="lan-link" to="/programming/javadatatypes">
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
          <h3>What is Java</h3>
          <ul>
            <li className="MsoNormal">
               Java is a high-level, object-oriented programming language that was developed by Sun Microsystems (now owned by Oracle Corporation). 
            </li>
            <li className="MsoNormal">
            It is known for its portability, security, and reliability, and is used to develop a wide range of applications, from web-based applications to mobile apps and enterprise software.
            </li>
          </ul>
          <p>&nbsp;</p>
          <h3>Features of Java</h3>
          <ul>
            <li className="MsoNormal">
               Platform independence: Java programs can run on any platform that has a Java Virtual Machine (JVM), which means that a single codebase can be used on multiple platforms without the need for modifications.                              
          </li>
            <li className='MsoNormal'>
               Memory management: Java has automatic memory management, which means that developers do not have to worry about memory allocation and deallocation. This makes it less prone to memory-related bugs and issues.               
            </li >
            <li className="MsoNormal">Security: Java has built-in security features that make it a popular choice for developing secure applications.</li>
            <li className="MsoNormal">
                Exception handling: Java has a robust exception handling mechanism that allows developers to handle errors and exceptions more gracefully.
            </li>
            <li className="MsoNormal">
               Object-oriented programming: Java is an object-oriented programming language, which means that it is based on the concept of objects and classes.
            </li>
            <li className="MsoNormal">
               Multi-threading: Java supports multithreading, which allows developers to create programs that can perform multiple tasks simultaneously.
            </li>
          </ul>
          <p>&nbsp;</p>
          <h3>What is Java used for</h3>
          <ul>
            <li className="MsoNormal">
               Portability: Java programs can run on any platform that has a JVM, which means that a single codebase can be used on multiple platforms without the need for modifications.
            </li>
            <li className="MsoNormal">
               Wide range of libraries and frameworks: Java has a vast array of libraries and frameworks that can be used to simplify development and speed up the development process.
            </li>
            <li className="MsoNormal">
               High performance: Java is known for its performance, particularly when it comes to handling large amounts of data.
            </li>
            <li className="MsoNormal">Scalability: Java is scalable and can be used to develop applications of any size, from small applications to large enterprise software.</li>
            <li className="MsoNormal">Security: Java has built-in security features that make it a popular choice for developing secure applications.</li>
            <li className="MsoNormal">
               Large developer community: Java has a large and active developer community, which means that there is a     wealth of resources available for developers to learn from and collaborate with.
               Overall, Java is a powerful and versatile programming language that is used to develop a wide range of applications. Its features, portability, and security make it a popular choice for developers, particularly those working on large and complex software projects.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
