import React,{useState} from "react";
import { Link } from "react-router-dom";
//import py from "./py.png"
export default function PYTHONFundamentals() {
  const [count, setCount] = useState("none");
  const navexpand=() =>{ 
    
    count==="none"?setCount("block"):setCount("none");
    
    
  }
  const st = {
   display:count
   
    
}
  return (
    <div>
      <div className="program-page" style={{ margin: "70px 10px 10px 10px" }}>
      <div className="side-lan-small" >
          <div  onClick={navexpand}>Related Articles 	<i className="fa fa-chevron-right" aria-hidden="true"/>
          <i className="fa fa-chevron-right" aria-hidden="true"/>
          </div></div>
        <div className="side-lan" style={st}>
          <div id="menu" style={{width:"100%"}}>
            <div className="leftmenu2">
              <div className="spanh2">
              
                <h2 className="python">C</h2>
              </div>
            </div>
            <div className="leftmenu">
              <ul>
                <li>
                  <Link
                    className="lan-link-active"
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
                  <Link className="lan-link" to="/">
                    Conditional and looping Statements
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/">
                    Strings
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/">
                    Errors and Exceptions in Python
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/">
                    Errors and Exceptions in Python
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/">
                    Lists
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/">
                    Tuples
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/">
                    Dictionary
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/">
                    Modules
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/">
                    Functions
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/">
                    OOP with Python
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/">
                    File Handling
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/">
                    Recursion
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
              </ul>
            </div>
          </div>
        </div>
        <div className="program-que-ans">
          <h2><center><u>Operators</u></center></h2>
          <div className="program-full-q">
            
           
            <p>An operator is a Symbol that performs an operation. An operators acts some
variables are called operands to get the desired result.

 Ex : a+b;
Where a,b are operands and + is the operator.
Types of Operator :
 1) Arithmetic Operators.
2) Relational Operators.
3) Logical Operators.
4) Assignment Operators.
5). Unary Operators.
6) Conditional Operators.
7) Special Operators.
8) Bitwise Operators.
9) Shift Operators.
Arithmetic Operators
An arithmetic operator performs mathematical operations such as addition, subtraction and
multiplication on numerical values (constants and variables).
</p>
          
            
          </div>
        </div>
      </div>
    </div>
  );
}
