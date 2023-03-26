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
                  <Link className="lan-link" to="/">
                  Variables
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
          <h2><center><u>C Loop</u></center></h2>
          <div className="program-full-q">
            
           
            <p>There may be a situation, when you need to execute a block of code several number
of times. In general, statements are executed sequentially: The first statement in a
function is executed first, followed by the second, and so on.
Programming languages provide various control structures that allow for more complicated
execution paths.
A loop statement allows us to execute a statement or group of statements multiple times.<br></br>
Loop:-it is a block of statement that performs set of instructions. In loops
Repeating particular portion of the program either a specified number of time or
until a particular no of condition is being satisfied.
There are three types of loops in c
<br></br>
1.While loop<br></br>
2.do while loop<br></br>
3.for loop 
<h3>while loop in C</h3>
 
 <p>
 A while loop statement in C programming language repeatedly executes a target
statement as long as a given condition is true.
Syntax

The condition may be any expression, and true is any nonzero value. The loop iterates
while the condition is true.
When the condition becomes false, program control passes to the line immediately
following the loop.

 </p>



<h3>for loop in C</h3>
A for loop is a repetition control structure that allows you to efficiently write a loop that
needs to execute a specific number of times.
</p>

<h3>do...while loop in C</h3>
Unlike for and while loops, which test the loop condition at the top of the loop,
the do...while loop in C programming language checks its condition at the bottom of the
loop.
A do...while loop is similar to a while loop, except that a do...while loop is guaranteed to
execute at least one time.


          </div>
        </div>
      </div>
    </div>
  );
}
