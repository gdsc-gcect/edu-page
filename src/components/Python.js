import React from "react";
import { Link } from "react-router-dom";

export default function Python() {
  return (
    <div>
      <div className="program-page" style={{ margin: "70px 10px 10px 10px" }}>
        <div className="side-lan">
          <div id="menu">
            <div className="leftmenu2">
              <h6 className="spanh2">
                <span className="spanh2"> Python</span>
              </h6>
            </div>
            <div className="leftmenu">
              <ul>
                <li>
                  <Link
                    className="lan-link"
                    to="/programming/python/PythonFundamentals"
                  >
                    Python Fundamentals
                  </Link>
                </li>
                <li>
                  <Link className="lan-link" to="/">
                    Data Types and Operators
                  </Link>
                </li>
                <li>
                  <Link className="lan-link" to="/">
                    Conditional and looping Statements
                  </Link>
                </li>
                <li>
                  <Link className="lan-link" to="/">
                    Strings
                  </Link>
                </li>
                <li>
                  <Link className="lan-link" to="/">
                    Errors and Exceptions in Python
                  </Link>
                </li>
                <li>
                  <Link className="lan-link" to="/">
                    Errors and Exceptions in Python
                  </Link>
                </li>
                <li>
                  <Link className="lan-link" to="/">
                    Lists
                  </Link>
                </li>
                <li>
                  <Link className="lan-link" to="/">
                    Tuples
                  </Link>
                </li>
                <li>
                  <Link className="lan-link" to="/">
                    Dictionary
                  </Link>
                </li>
                <li>
                  <Link className="lan-link" to="/">
                    Modules
                  </Link>
                </li>
                <li>
                  <Link className="lan-link" to="/">
                    Functions
                  </Link>
                </li>
                <li>
                  <Link className="lan-link" to="/">
                    OOP with Python
                  </Link>
                </li>
                <li>
                  <Link className="lan-link" to="/">
                    File Handling
                  </Link>
                </li>
                <li>
                  <Link className="lan-link" to="/">
                    Recursion
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="program-que-ans">
          <h3>What is Python</h3>
          <ul>
            <li className="MsoNormal">
              Python is a dynamically typed, General Purpose Programming
              Language that supports an object-oriented programming approach as
              well as a functional programming approach.
            </li>
            <li className="MsoNormal">
              Python is also an interpreted and high-level programming language.
            </li>
            <li className="MsoNormal">
              It was created by Guido Van Rossum in 1989.
            </li>
          </ul>
          <p>&nbsp;</p>
          <h3>Features of Python</h3>
          <ul>
            <li className="MsoNormal">Python is simple and easy to understand.</li>
            <li>
              It is Interpreted and platform-independent which makes debugging
              very easy.
            </li >
            <li className="MsoNormal">Python is an open-source programming language.</li>
            <li className="MsoNormal">
              Python provides very big library support. Some of the popular
              libraries include NumPy, Tensorflow, Selenium, OpenCV, etc.
            </li>
            <li className="MsoNormal">
              It is possible to integrate other programming languages within
              python.
            </li>
          </ul>
          <p>&nbsp;</p>
          <h3>What is Python used for</h3>
          <ul>
            <li className="MsoNormal">
              Python is used in Data Visualization to create plots and graphical
              representations.
            </li>
            <li className="MsoNormal">
              Python helps in Data Analytics to analyze and understand raw data
              for insights and trends.
            </li>
            <li className="MsoNormal">
              It is used in AI and Machine Learning to simulate human behavior
              and to learn from past data without hard coding.
            </li>
            <li className="MsoNormal">It is used to create web applications.</li>
            <li className="MsoNormal">It can be used to handle databases.</li>
            <li className="MsoNormal">
              It is used in business and accounting to perform complex
              mathematical operations along with quantitative and qualitative
              analysis.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}