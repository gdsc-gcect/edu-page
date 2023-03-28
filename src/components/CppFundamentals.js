import React, { useState } from "react";
import { Link } from "react-router-dom";
// import cpp from './cpp.png'

export default function CppFundamentals() {
  // const handlecopy=()=>{
  //   var text = document.getElementsByClassName("code").innerText;
  //   // alert(text);
  //   // this.text.select();

  //   navigator.clipboard.writeText(text);

  // }
  const [count, setCount] = useState("none");
  const navexpand = () => {
    count === "none" ? setCount("block") : setCount("block");
  };
  const corssactive = () => {
    count === "block" ? setCount("none") : setCount("none");
  };
  const st = {
    display: count,
  };
  return (
    <div>
      <div className="program-page" style={{ margin: "70px 10px 10px 10px" }}>
        <div className="side-lan-small">
          <div onClick={navexpand}>
            Related Articles{" "}
            <i className="fa fa-chevron-right" aria-hidden="true" />
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </div>
        </div>
        <div className="side-lan" style={st}>
          <div className="cross" onClick={corssactive}>
            {" "}
            <i className="fa fa-times" aria-hidden="true" />
          </div>
          <div id="menu" style={{ width: "100%" }}>
            <div className="leftmenu2">
              <div className="spanh2">
                {/* <img className="bd-placeholder-img rounded-circle" width="40" height="40" src={py} alt="..."></img> */}
                <h2 className="python">C++</h2>
              </div>
            </div>
            <div className="leftmenu">
              <ul>
                <li>
                  <Link
                    className="lan-link-active"
                    to="/programming/CPP/fundamentals"
                  >
                    Fundamental Types, Constants, and Variables
                  </Link>
                </li>
                <hr
                  className="featurette-divider"
                  style={{ color: "#a6a6af" }}
                />
                <li>
                  <Link
                    className="lan-link"
                    to="/programming/python/DataTypesAndOperators"
                  >
                    Introductions to Classes,Objects and Strings
                  </Link>
                </li>
                <hr
                  className="featurette-divider"
                  style={{ color: "#a6a6af" }}
                />
                <li>
                  <Link
                    className="lan-link"
                    to="/programming/python/DataTypesAndOperators"
                  >
                    Classes
                  </Link>
                </li>
                <hr
                  className="featurette-divider"
                  style={{ color: "#a6a6af" }}
                />
                <li>
                  <Link className="lan-link" to="/">
                    Control Statements
                  </Link>
                </li>
                <hr
                  className="featurette-divider"
                  style={{ color: "#a6a6af" }}
                />
                <li>
                  <Link className="lan-link" to="/">
                    Functions
                  </Link>
                </li>
                <hr
                  className="featurette-divider"
                  style={{ color: "#a6a6af" }}
                />
                <li>
                  <Link className="lan-link" to="/">
                    Array and Vectors
                  </Link>
                </li>
                <hr
                  className="featurette-divider"
                  style={{ color: "#a6a6af" }}
                />
                <li>
                  <Link className="lan-link" to="/">
                    Pointers
                  </Link>
                </li>
                <hr
                  className="featurette-divider"
                  style={{ color: "#a6a6af" }}
                />
                <li>
                  <Link className="lan-link" to="/">
                    Standard Template Library(STL)
                  </Link>
                </li>
                <hr
                  className="featurette-divider"
                  style={{ color: "#a6a6af" }}
                />
                <li>
                  <Link className="lan-link" to="/">
                    Tuples
                  </Link>
                </li>
                <hr
                  className="featurette-divider"
                  style={{ color: "#a6a6af" }}
                />
                <li>
                  <Link className="lan-link" to="/">
                    Dictionary
                  </Link>
                </li>
                <hr
                  className="featurette-divider"
                  style={{ color: "#a6a6af" }}
                />
                <li>
                  <Link className="lan-link" to="/">
                    Modules
                  </Link>
                </li>
                <hr
                  className="featurette-divider"
                  style={{ color: "#a6a6af" }}
                />
                <li>
                  <Link className="lan-link" to="/">
                    Functions
                  </Link>
                </li>
                <hr
                  className="featurette-divider"
                  style={{ color: "#a6a6af" }}
                />
                <li>
                  <Link className="lan-link" to="/">
                    OOP with Python
                  </Link>
                </li>
                <hr
                  className="featurette-divider"
                  style={{ color: "#a6a6af" }}
                />
                <li>
                  <Link className="lan-link" to="/">
                    File Handling
                  </Link>
                </li>
                <hr
                  className="featurette-divider"
                  style={{ color: "#a6a6af" }}
                />
                <li>
                  <Link className="lan-link" to="/">
                    Recursion
                  </Link>
                </li>
                <hr
                  className="featurette-divider"
                  style={{ color: "#a6a6af" }}
                />
              </ul>
            </div>
          </div>
        </div>
        <div className="program-que-ans">
          <h3>FUNDAMENTAL TYPES</h3>
          <ul>
          <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Boolean
          </Link>
          <ul className="dropdown-menu" style={{padding:"10px"}}>
          <li className="Mso"><strong>bool: </strong> C++ uses the bool type to represent boolean values. An
expression of the type bool can either be true or false, where the  value for
true  represented as the numerical value 1 and false by a zero.</li>
           
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Characters
          </Link>
          <ul className="dropdown-menu" style={{padding:"10px"}}>
          <li className="Mso"><strong>char:</strong>  The char (character) type is used to store character codes in one byte (8 bits). This
amount of storage is sufficient for extended character sets. </li>

<li className="Mso"><strong>wchar_t:</strong> The wchar_t (wide character type) type comprises at least 2 bytes (16 bits) and is
thus capable of storing modern Unicode characters. Unicode is a 16-bit code  and containing codes for approximately 35,000 characters in 24 languages.</li>
          </ul>
        </li>
            
          </ul>

          {/* <div className='code-snippet'>
    
       
        <div className="code">
     <button className="btn-copy "  title="Copy to Clipboard" onClick={handlecopy} ><i class="fa fa-clone"></i></button> 
    <div className="prettyprint lang-html prettyprinted" id='first'>
    <span class="atn">#include</span>
      <span class="tag" >&lt;stdio.h&gt;</span>
     
      <br/>
      <span class="pln">  </span>
      <span class="atn">int</span>
      <span class="pln"> </span>
      <span class="atn">main()&#123;</span>
      <br/>
      &emsp;
      <span class="atv">printf("my name");</span>
      <br></br>
      &emsp;
      <span class="atn">return 0;</span>
      <br/>
      <span class="atn">&#125;</span>
      {/* <br/>&emsp;&emsp;
      <span class="tag" >&lt;section</span>
      <span class="pln"> </span>
      <span class="atn">id</span>
      <span class="pun">=</span>
      <span class="atv">"hero"</span>
      <span class="tag">&gt;</span>
      <span class="pln"></span> 
   </div>
           
        </div>  
        <div className="code">
     <button className="btn-copy "  title="Copy to Clipboard" onClick={handlecopy} ><i class="fa fa-clone"></i></button> 
    <div className="prettyprint lang-html prettyprinted" id='first'>
    <span class="atn">#include</span>
      <span class="tag" >&lt;stdio.h&gt;</span>
     
      <br/>
      <span class="pln">  </span>
      <span class="atn">int</span>
      <span class="pln"> </span>
      <span class="atn">main()&#123;</span>
      <br/>
      &emsp;
      <span class="atv">printf("my name");</span>
      <br></br>
      &emsp;
      <span class="atn">return 0;</span>
      <br/>
      <span class="atn">&#125;</span>
      {/* <br/>&emsp;&emsp;
      <span class="tag" >&lt;section</span>
      <span class="pln"> </span>
      <span class="atn">id</span>
      <span class="pun">=</span>
      <span class="atv">"hero"</span>
      <span class="tag">&gt;</span>
      <span class="pln"></span> 
   </div>
           
        </div> 
        <div className="code">
     <button className="btn-copy "  title="Copy to Clipboard" onClick={handlecopy} ><i class="fa fa-clone"></i></button> 
    <div className="prettyprint lang-html prettyprinted" id='first'>
    <span class="atn">#include</span>
      <span class="tag" >&lt;stdio.h&gt;</span>
     
      <br/>
      <span class="pln">  </span>
      <span class="atn">int</span>
      <span class="pln"> </span>
      <span class="atn">main()&#123;</span>
      <br/>
      &emsp;
      <span class="atv">printf("my name");</span>
      <br></br>
      &emsp;
      <span class="atn">return 0;</span>
      <br/>
      <span class="atn">&#125;</span>
      {/* <br/>&emsp;&emsp;
      <span class="tag" >&lt;section</span>
      <span class="pln"> </span>
      <span class="atn">id</span>
      <span class="pun">=</span>
      <span class="atv">"hero"</span>
      <span class="tag">&gt;</span>
      <span class="pln"></span> 
   </div>
           
        </div>   
        </div>   */}
        </div>
      </div>
    </div>
  );
}
