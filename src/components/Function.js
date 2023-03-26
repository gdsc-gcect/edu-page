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
                  <Link className="lan-link" to="/programming/C/Loop">
                  C loop
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link-active" to="/programming/C/Function">
                  C Functions
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
          <h2><center><u>Function in C</u></center></h2>
          <div className="program-full-q">
            
           
            <p>A function is a self contained block of codes or sub programs with a set of
statements that perform some specific task or coherent task when it is called.
It is something like to hiring a person to do some specific task like, every six
months servicing a bike and hand over to it.
Any ‘C’ program contain at least one function i.e main().
There are basically two types of function those are<br></br>
 <strong><br></br>1. Library function<br></br>
 2. User defined function
 </strong>


 
 <p>
 In system defined function description:
 Function definition : predefined, precompiled, stored in the library<br></br>
 

 <strong>Function declaration</strong> : In header file with or function prototype.<br></br>
 <strong>Function call</strong> : By the programmer<br></br>
 <strong>User defined function</strong><br></br>
Syntax:-
 Return type name of function (type 1 arg 1, type2 arg2, type3 arg3)<br></br>
 Return type function name argument list of the above syntax
So when user gets his own function three thing he has to know, these are.<br></br>
<strong>Function declaration</strong><br></br>
<strong>Function definition</strong><br></br>
<strong>Function call</strong><br></br>
 </p>


<p>
 <h4>Function declaration:-</h4>
 Function declaration is also known as function prototype. It inform the compiler
about three thing, those are name of the function, number and type of argument
received by the function and the type of value returned by the function.
While declaring the name of the argument is optional and the function prototype
always terminated by the semicolon.
<h4>Function definition:-</h4>
Function definition consists of the whole description and code of the function.
It tells about what function is doing what are its inputs and what are its out put
It consists of two parts function header and function body

The return type denotes the type of the value that function will return and it is
optional and if it is omitted, it is assumed to be int by default. The body of the
function is the compound statements or block which consists of local variable
declaration statement and optional return statement.

The local variable declared inside a function is local to that function only. It can’t
be used anywhere in the program and its existence is only within this function.
The arguments of the function definition are known as formal arguments.
<h4>Function Call</h4>
When the function get called by the calling function then that is called, function
call. The compiler execute these functions when the semicolon is followed by the
function name.

The argument that are used inside the function call are called actual argument

<h4>Actual argument</h4>

The arguments which are mentioned or used inside the function call is knows as
actual argument and these are the original values and copy of these are actually
sent to the called function

<h4>Formal Arguments</h4>
The arguments which are mentioned in function definition are called formal
arguments or dummy arguments.
 
These arguments are used to just hold the copied of the values that are sent by the
calling function through the function call.
These arguments are like other local variables which are created when the function
call starts and destroyed when the function ends.
The basic difference between the formal argument and the actual argument are<br></br>
 1. The formal argument are declared inside the parenthesis where as the
local variable declared at the beginning of the function block.<br></br>
2. The formal argument are automatically initialized when the copy of actual
arguments are passed while other local variable are assigned values through the
statements.
Order number and type of actual arguments in the function call should be match
with the order number and type of the formal arguments.
<h4>Return type</h4>
It is used to return value to the calling function. 

</p>
 </p>

          </div>
        </div>
      </div>
    </div>
  );
}
