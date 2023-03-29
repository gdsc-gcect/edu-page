import React, { useState } from "react";
import { Link } from "react-router-dom";
// import cpp from './cpp.png'

export default function Cppstl() {
  const handlecopy = () => {
    var text = document.getElementById("firs").innerText;
    //
    //  this.text.select();

    navigator.clipboard.writeText(text);
    alert("copied");
  };

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
                  <Link className="lan-link-active" to="/programming/Cpp/list">
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
          <ul>
            <li>
              <h2 className="topic">List Class:</h2>
              <br />
              <p>
                The list class is used to create sequential containers.
                <br />
                <strong>SYNTAX:</strong>
                <br />
                list&lt;char&gt; myList;{" "}
                <span className="com">list of characters</span>
                <br />
                list&lt;int&gt; myList;{" "}
                <span className="com">list of integers</span>
                <br />
                list&lt;float&gt; myList;{" "}
                <span className="com">list of floats</span>
              </p>
              <strong>Important Member Function of List</strong>
              <ul>
                <li className="MsoNormal" style={{ marginLeft: "20px" }}>
                  push_front()
                </li>
                <li className="MsoNormal" style={{ marginLeft: "20px" }}>
                  push_back()
                </li>
                <li className="MsoNormal" style={{ marginLeft: "20px" }}>
                  pop_front()
                </li>
                <li className="MsoNormal" style={{ marginLeft: "20px" }}>
                  pop_back()
                </li>
                <li className="MsoNormal" style={{ marginLeft: "20px" }}>
                  insert()
                </li>
                <li className="MsoNormal" style={{ marginLeft: "20px" }}>
                  find()
                </li>
                <li className="MsoNormal" style={{ marginLeft: "20px" }}>
                  erase()
                </li>
                <li className="MsoNormal" style={{ marginLeft: "20px" }}>
                  front()
                </li>
                <li className="MsoNormal" style={{ marginLeft: "20px" }}>
                  back()
                </li>
                <li className="MsoNormal" style={{ marginLeft: "20px" }}>
                  erase()
                </li>
                <li className="MsoNormal" style={{ marginLeft: "20px" }}>
                  clear()
                </li>
                <li className="MsoNormal" style={{ marginLeft: "20px" }}>
                  reverse()
                </li>
                <li className="MsoNormal" style={{ marginLeft: "20px" }}>
                  sort()
                </li>
                <li className="MsoNormal" style={{ marginLeft: "20px" }}>
                  unique()
                </li>
              </ul>
              
              <div className="code">
                <div
                  className="ace_layer ace_text-layer"
                  style={{
                    margin: "0px 4px",
                  }}
                >
                  <button
                className="btn-copy "
                title="Copy to Clipboard"
                onClick={handlecopy}
              >
                <i className="fa fa-clone"></i>
              </button>
                  <div id="firs">
                    <div className="ace_line">
                      <span className="ace_keyword">#include</span>
                      <span className="ace_constant ace_other">
                        {" "}
                        &lt;bits/stdc++.h&gt;
                      </span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_keyword ace_control">using</span>{" "}
                      <span className="ace_keyword ace_operator">namespace</span>{" "}
                      <span className="ace_identifier">std</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_storage ace_type">int</span>{" "}
                      <span className="ace_identifier">main</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_paren ace_rparen">)</span>{" "}
                      <span className="ace_paren ace_lparen">&#123;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">list</span>
                      <span className="ace_keyword ace_operator">&lt;</span>
                      <span className="ace_storage ace_type">int</span>
                      <span className="ace_keyword ace_operator">&gt;</span>{" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_paren ace_lparen">&#123;</span>
                      <span className="ace_constant ace_numeric">34</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_constant ace_numeric">78</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_constant ace_numeric">10</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_constant ace_numeric">67</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_constant ace_numeric">55</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_constant ace_numeric">6</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_constant ace_numeric">32</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_constant ace_numeric">10</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_constant ace_numeric">56</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_constant ace_numeric">55</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_constant ace_numeric">4</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_constant ace_numeric">6</span>
                      <span className="ace_paren ace_rparen">&#125;</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">list</span>
                      <span className="ace_keyword ace_operator">&lt;</span>
                      <span className="ace_storage ace_type">int</span>
                      <span className="ace_keyword ace_operator">&gt;</span>{" "}
                      <span className="ace_identifier">my2list</span>
                      <span className="ace_paren ace_lparen">&#123;</span>
                      <span className="ace_constant ace_numeric">33</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_constant ace_numeric">87</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_constant ace_numeric">100</span>
                      <span className="ace_paren ace_rparen">&#125;</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">push_back</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_constant ace_numeric">10</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string ace_start">"</span>
                      <span className="ace_constant ace_language ace_escape">
                        \n
                      </span>
                      <span className="ace_string">After inserting at last: </span>
                      <span className="ace_string ace_end">"</span>{" "}
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_keyword ace_control">for</span>{" "}
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_storage ace_type">auto</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_punctuation ace_operator">:</span>{" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_paren ace_rparen">)</span>{" "}
                      <span className="ace_paren ace_lparen">&#123;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string">' '</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_paren ace_rparen">&#125;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">push_front</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_constant ace_numeric">18</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string ace_start">"</span>
                      <span className="ace_constant ace_language ace_escape">
                        \n
                      </span>
                      <span className="ace_string">After inserting at first: </span>
                      <span className="ace_string ace_end">"</span>{" "}
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_keyword ace_control">for</span>{" "}
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_storage ace_type">auto</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_punctuation ace_operator">:</span>{" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_paren ace_rparen">)</span>{" "}
                      <span className="ace_paren ace_lparen">&#123;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string">' '</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_paren ace_rparen">&#125;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">pop_back</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string ace_start">"</span>
                      <span className="ace_constant ace_language ace_escape">
                        \n
                      </span>
                      <span className="ace_string">
                        After removing last element:{" "}
                      </span>
                      <span className="ace_string ace_end">"</span>{" "}
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_keyword ace_control">for</span>{" "}
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_storage ace_type">auto</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_punctuation ace_operator">:</span>{" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_paren ace_rparen">)</span>{" "}
                      <span className="ace_paren ace_lparen">&#123;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string">' '</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_paren ace_rparen">&#125;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">pop_front</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string ace_start">"</span>
                      <span className="ace_constant ace_language ace_escape">
                        \n
                      </span>
                      <span className="ace_string">
                        After removing first element:{" "}
                      </span>
                      <span className="ace_string ace_end">"</span>{" "}
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_keyword ace_control">for</span>{" "}
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_storage ace_type">auto</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_punctuation ace_operator">:</span>{" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_paren ace_rparen">)</span>{" "}
                      <span className="ace_paren ace_lparen">&#123;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string">' '</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_paren ace_rparen">&#125;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string ace_start">"</span>
                      <span className="ace_constant ace_language ace_escape">
                        \n
                      </span>
                      <span className="ace_string">First Element: </span>
                      <span className="ace_string ace_end">"</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">front</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_paren ace_rparen">)</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_identifier">endl</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string ace_start">"</span>
                      <span className="ace_constant ace_language ace_escape">
                        \n
                      </span>
                      <span className="ace_string">Last Element: </span>
                      <span className="ace_string ace_end">"</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">back</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>
                      <span className="ace_identifier">endl</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>

                    <div className="ace_line">
                      {" "}
                      <span className="ace_comment">
                        &#47;&#47;insert() with find()
                      </span>
                    </div>
                    
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">list</span>
                      <span className="ace_keyword ace_operator">&lt;</span>
                      <span className="ace_storage ace_type">int</span>
                      <span className="ace_keyword ace_operator">&gt;</span>
                      <span className="ace_punctuation ace_operator">::</span>
                      <span className="ace_identifier">iterator</span>{" "}
                      <span className="ace_identifier">iter</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">iter</span>
                      <span className="ace_keyword ace_operator">=</span>
                      <span className="ace_identifier">find</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">begin</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">end</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_constant ace_numeric">10</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">insert</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_identifier">iter</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_constant ace_numeric">-10</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string ace_start">"</span>
                      <span className="ace_constant ace_language ace_escape">
                        \n
                      </span>
                      <span className="ace_string">
                        After insertion in between:{" "}
                      </span>
                      <span className="ace_string ace_end">"</span>{" "}
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_keyword ace_control">for</span>{" "}
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_storage ace_type">auto</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_punctuation ace_operator">:</span>{" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_paren ace_rparen">)</span>{" "}
                      <span className="ace_paren ace_lparen">&#123;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string">' '</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>

                    <div className="ace_line">
                      <span className="ace_paren ace_rparen">&#125;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_comment">&#47;&#47;erase()</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"></span>{" "}
                      <span className="ace_identifier">iter</span>
                      <span className="ace_keyword ace_operator">=</span>
                      <span className="ace_identifier">find</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">begin</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">end</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">,</span>
                      <span className="ace_constant ace_numeric">-10</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">erase</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_identifier">iter</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">;</span>{" "}
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string ace_start">"</span>
                      <span className="ace_constant ace_language ace_escape">
                        \n
                      </span>
                      <span className="ace_string">
                        After removing first element:{" "}
                      </span>
                      <span className="ace_string ace_end">"</span>{" "}
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_keyword ace_control">for</span>{" "}
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_storage ace_type">auto</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_punctuation ace_operator">:</span>{" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_paren ace_rparen">)</span>{" "}
                      <span className="ace_paren ace_lparen">&#123;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string">' '</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_paren ace_rparen">&#125;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_comment">&#47;&#47;reversing list</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">reverse</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string ace_start">"</span>
                      <span className="ace_constant ace_language ace_escape">
                        \n
                      </span>
                      <span className="ace_string">After reversing: </span>
                      <span className="ace_string ace_end">"</span>{" "}
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_keyword ace_control">for</span>{" "}
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_storage ace_type">auto</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_punctuation ace_operator">:</span>{" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_paren ace_rparen">)</span>{" "}
                      <span className="ace_paren ace_lparen">&#123;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string">' '</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_paren ace_rparen">&#125;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_comment">&#47;&#47;sorting</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">sort</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string ace_start">"</span>
                      <span className="ace_constant ace_language ace_escape">
                        \n
                      </span>
                      <span className="ace_string">After sorting: </span>
                      <span className="ace_string ace_end">"</span>{" "}
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_keyword ace_control">for</span>{" "}
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_storage ace_type">auto</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_punctuation ace_operator">:</span>{" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_paren ace_rparen">)</span>{" "}
                      <span className="ace_paren ace_lparen">&#123;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string">' '</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_paren ace_rparen">&#125;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_comment">
                        &#47;&#47;deleting duplicate elements
                      </span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">unique</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string ace_start">"</span>
                      <span className="ace_constant ace_language ace_escape">
                        \n
                      </span>
                      <span className="ace_string">unique elements only: </span>
                      <span className="ace_string ace_end">"</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_keyword ace_control">for</span>{" "}
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_storage ace_type">auto</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_punctuation ace_operator">:</span>{" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_paren ace_rparen">)</span>{" "}
                      <span className="ace_paren ace_lparen">&#123;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string">' '</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_paren ace_rparen">&#125;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_comment">&#47;&#47;size of list</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string ace_start">"</span>
                      <span className="ace_constant ace_language ace_escape">
                        \n
                      </span>
                      <span className="ace_string">Size of list: </span>
                      <span className="ace_string ace_end">"</span>{" "}
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">cout</span>
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>
                      <span className="ace_string ace_start">"</span>
                      <span className="ace_constant ace_language ace_escape">
                        \n
                      </span>
                      <span className="ace_string ace_end">"</span>
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">size</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>

                    <div className="ace_line">
                      {" "}
                      <span className="ace_comment">
                        &#47;&#47;merging two list
                      </span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">merge</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_identifier">my2list</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string ace_start">"</span>
                      <span className="ace_constant ace_language ace_escape">
                        \n
                      </span>
                      <span className="ace_string">After merging two list: </span>
                      <span className="ace_string ace_end">"</span>{" "}
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_keyword ace_control">for</span>{" "}
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_storage ace_type">auto</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_punctuation ace_operator">:</span>{" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_paren ace_rparen">)</span>{" "}
                      <span className="ace_paren ace_lparen"></span>&#123;
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string">' '</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_paren ace_rparen">&#125;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_comment">&#47;&#47;clear list</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_punctuation ace_operator">.</span>
                      <span className="ace_identifier">clear</span>
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_paren ace_rparen">)</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string ace_start">"</span>
                      <span className="ace_constant ace_language ace_escape">
                        \n
                      </span>
                      <span className="ace_string">After clearing the list: </span>
                      <span className="ace_string ace_end">"</span>{" "}
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_keyword ace_control">for</span>{" "}
                      <span className="ace_paren ace_lparen">(</span>
                      <span className="ace_storage ace_type">auto</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_punctuation ace_operator">:</span>{" "}
                      <span className="ace_identifier">mylist</span>
                      <span className="ace_paren ace_rparen">)</span>{" "}
                      <span className="ace_paren ace_lparen">&#123;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_indent-guide"> </span>{" "}
                      <span className="ace_identifier">cout</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_identifier">i</span>{" "}
                      <span className="ace_keyword ace_operator">&lt;&lt;</span>{" "}
                      <span className="ace_string">' '</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_paren ace_rparen">&#125;</span>
                    </div>
                    <div className="ace_line"> </div>
                    <div className="ace_line">
                      {" "}
                      <span className="ace_keyword ace_control">return</span>{" "}
                      <span className="ace_constant ace_numeric">0</span>
                      <span className="ace_punctuation ace_operator">;</span>
                    </div>
                    <div className="ace_line">
                      <span className="ace_paren ace_rparen">&#125;</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="output">
                <p>
                  After inserting at last: 34 78 10 67 55 6 32 10 56 55 4 6 10{" "}
                </p>
                <p>
                  After inserting at first: 18 34 78 10 67 55 6 32 10 56 55 4 6
                  10{" "}
                </p>
                <p>
                  After removing last element: 18 34 78 10 67 55 6 32 10 56 55 4
                  6{" "}
                </p>
                <p>
                  After removing first element: 34 78 10 67 55 6 32 10 56 55 4 6{" "}
                </p>
                <p>First Element: 34</p>
                <p>Last Element: 6</p>

                <p>
                  After insertion in between: 34 78 -10 10 67 55 6 32 10 56 55 4
                  6{" "}
                </p>
                <p>
                  After removing first element: 34 78 10 67 55 6 32 10 56 55 4 6{" "}
                </p>
                <p>After reversing: 6 4 55 56 10 32 6 55 67 10 78 34 </p>
                <p>After sorting: 4 6 6 10 10 32 34 55 55 56 67 78 </p>
                <p>unique elements only: 4 6 10 32 34 55 56 67 78 </p>
                <p>Size of list:9</p>
                <p>
                  After merging two list: 4 6 10 32 33 34 55 56 67 78 87 100{" "}
                </p>
                <p>After clearing the list: </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
