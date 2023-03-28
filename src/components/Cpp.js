import React,{useState} from 'react'
import { Link } from 'react-router-dom';
// import cpp from './cpp.png'

export default function Cpp() {
  const handlecopy = () => {
    var text = document.getElementById("first").innerText;
    //
    //  this.text.select();

    navigator.clipboard.writeText(text);
    alert("copied");
  };
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
                {/* <img className="bd-placeholder-img rounded-circle" width="40" height="40" src={py} alt="..."></img> */}
                <h2 className="python">C++</h2>
              </div>
            </div>
            <div className="leftmenu">
              <ul>
              <li>
                  <Link className="lan-link" to="/programming/Cpp/list">
                    List
                  </Link>
                </li>
                <hr
                  className="featurette-divider"
                  style={{ color: "#a6a6af" }}
                />
                <li>
                  <Link className="lan-link" to="/">
                    Vector
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="program-que-ans">
          
          <h3>C++</h3>
          <ul>
          <li className="MsoNormal">
              The C++ programming language was created by Bjarne stroustrup and his team at bell Laboratories.
            </li >
            <li className="MsoNormal">
              C++ is the combination of both the object-oriented programming and the functionality of the C programming language.
            </li >
            
            <li className="MsoNormal">
              C++ supports the concepts of object-oriented programming  which are:
              <ul>
                <li>
                <span className="atn">Data abstraction </span>
                </li>
                <li>
                <span className="atn">Data encapsulation </span>
                </li>
                <li>
                <span className="atn">Inheritance </span> 
                </li>
                <li>
                <span className="atn">Polymorphism </span>
                </li>
              </ul>
            </li>
            <li className="MsoNormal">
             Structure of a C++ Program
             <div className="code">
     <button className="btn-copy"  title="Copy to Clipboard" onClick={handlecopy} ><i className="fa fa-clone"></i></button> 
    <div className="prettyprint lang-html prettyprinted" id='first'>
    <span className="atn">#include</span>
      <span className="atn" >&lt;iostream&gt;</span>
      <br/>
      <span className="atn" >using namespace </span>
      <span className="tag" >std;</span>
      <br/>
      <span className="pln">  </span>
      <span className="int">int</span>
      <span className="pln"> </span>
      <span className="atvn">main()&#123;</span>
      <br/>
      <span className="pln"> </span>
      <span className="return">return </span>
      <span className="atnv"> 0;</span>
      <br/>
      <span className="tag">&#125;</span>
      
   </div>
           
        </div>  
            </li >
            
          </ul>
         
          {/* <div className='code-snippet'>
    
       
        <div className="code">
     <button className="btn-copy "  title="Copy to Clipboard" onClick={handlecopy} ><i className="fa fa-clone"></i></button> 
    <div className="prettyprint lang-html prettyprinted" id='first'>
    <span className="atn">#include</span>
      <span className="tag" >&lt;stdio.h&gt;</span>
     
      <br/>
      <span className="pln">  </span>
      <span className="atn">int</span>
      <span className="pln"> </span>
      <span className="atn">main()&#123;</span>
      <br/>
      &emsp;
      <span className="atv">printf("my name");</span>
      <br></br>
      &emsp;
      <span className="atn">return 0;</span>
      <br/>
      <span className="atn">&#125;</span>
      {/* <br/>&emsp;&emsp;
      <span className="tag" >&lt;section</span>
      <span className="pln"> </span>
      <span className="atn">id</span>
      <span className="pun">=</span>
      <span className="atv">"hero"</span>
      <span className="tag">&gt;</span>
      <span className="pln"></span> 
   </div>
           
        </div>  
        <div className="code">
     <button className="btn-copy "  title="Copy to Clipboard" onClick={handlecopy} ><i className="fa fa-clone"></i></button> 
    <div className="prettyprint lang-html prettyprinted" id='first'>
    <span className="atn">#include</span>
      <span className="tag" >&lt;stdio.h&gt;</span>
     
      <br/>
      <span className="pln">  </span>
      <span className="atn">int</span>
      <span className="pln"> </span>
      <span className="atn">main()&#123;</span>
      <br/>
      &emsp;
      <span className="atv">printf("my name");</span>
      <br></br>
      &emsp;
      <span className="atn">return 0;</span>
      <br/>
      <span className="atn">&#125;</span>
      {/* <br/>&emsp;&emsp;
      <span className="tag" >&lt;section</span>
      <span className="pln"> </span>
      <span className="atn">id</span>
      <span className="pun">=</span>
      <span className="atv">"hero"</span>
      <span className="tag">&gt;</span>
      <span className="pln"></span> 
   </div>
           
        </div> 
        <div className="code">
     <button className="btn-copy "  title="Copy to Clipboard" onClick={handlecopy} ><i className="fa fa-clone"></i></button> 
    <div className="prettyprint lang-html prettyprinted" id='first'>
    <span className="atn">#include</span>
      <span className="tag" >&lt;stdio.h&gt;</span>
     
      <br/>
      <span className="pln">  </span>
      <span className="atn">int</span>
      <span className="pln"> </span>
      <span className="atn">main()&#123;</span>
      <br/>
      &emsp;
      <span className="atv">printf("my name");</span>
      <br></br>
      &emsp;
      <span className="atn">return 0;</span>
      <br/>
      <span className="atn">&#125;</span>
      {/* <br/>&emsp;&emsp;
      <span className="tag" >&lt;section</span>
      <span className="pln"> </span>
      <span className="atn">id</span>
      <span className="pun">=</span>
      <span className="atv">"hero"</span>
      <span className="tag">&gt;</span>
      <span className="pln"></span> 
   </div>
           
        </div>   
        </div>   */}
        </div>
      </div>
    </div>
       
    
  )
}