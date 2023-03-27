import React, { useState } from "react";
import { Link } from "react-router-dom";
import py from "./py.png"

export default function ConditionalAndLooping() {
    const [count, setCount] = useState("none");
    const navexpand = () => {

        count === "none" ? setCount("block") : setCount("none");


    }
    const corssactive = () => {

        count === "block" ? setCount("none") : setCount("none");


    }
    const st = {
        display: count


    }
    return (
        <div>
            <div className="program-page" style={{ margin: "70px 10px 10px 10px" }}>
                <div className="side-lan-small" >
                    <div onClick={navexpand}>Related Articles 	<i className="fa fa-chevron-right" aria-hidden="true" />
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                    </div></div>
                <div className="side-lan" style={st}>
                    <div className='cross' onClick={corssactive}>	<i className="fa fa-times" aria-hidden="true" />
                    </div>
                    <div id="menu" style={{ width: "100%" }}>
                        <div className="leftmenu2">
                            <div className="spanh2">
                                <img className="bd-placeholder-img rounded-circle" width="40" height="40" src={py} alt="..."></img>
                                <h2 className="python">PYTHON</h2>
                            </div>
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
                                <hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                                <li>
                                    <Link className="lan-link" to="/programming/python/DataTypesAndOperators">
                                        Data Types and Operators
                                    </Link>
                                </li>
                                <hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                                <li>
                                    <Link className="lan-link-active" to="/programming/python/ConditionalAndLooping">
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
                                        Errors and Exceptions in Python
                                    </Link>
                                </li>
                                <hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                                <li>
                                    <Link className="lan-link" to="/">
                                        Errors and Exceptions in Python
                                    </Link>
                                </li>
                                <hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                                <li>
                                    <Link className="lan-link" to="/">
                                        Lists
                                    </Link>
                                </li>
                                <hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                                <li>
                                    <Link className="lan-link" to="/">
                                        Tuples
                                    </Link>
                                </li>
                                <hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                                <li>
                                    <Link className="lan-link" to="/">
                                        Dictionary
                                    </Link>
                                </li>
                                <hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                                <li>
                                    <Link className="lan-link" to="/">
                                        Modules
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
                                        File Handling
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
                    <h3>Loops and Control Statements (continue, break and
                        pass) in Python</h3>
                    <div className="program-full-q">
                        <p>
                            Python programming language provides following types of loops to handle
                            looping requirements.
                        </p>
                        <strong>While Loop</strong>
                        <p>In Python, all the statements indented by the same number of character
                            spaces after a programming construct are considered to be part of a single
                            block of code. Python uses indentation as its method of grouping statements.</p>

                        <strong>For in Loop</strong>
                        <p>In Python, there is no C style for loop, i.e., for (i=0; i&lt;n; i++). There is “for in”
                            loop which is similar to for each loop in other languages.</p>

                        <strong>Nested Loops</strong>
                        <p>Python programming language allows to use one loop inside another loop.
                            Following section shows few examples to illustrate the concept.
                        </p>
                        <p>A final note on loop nesting is that we can put any type of loop inside of any
                            other type of loop. For example a for loop can be inside a while loop or vice
                            versa.</p>

                        <strong>Loop Control Statements:</strong>
                        <p>Loop control statements change execution from its normal sequence. When
                            execution leaves a scope, all automatic objects that were created in that
                            scope are destroyed. Python supports the following control statements.</p>
                        <strong>Continue Statement</strong>
                        <p>It returns the control to the beginning of the loop.</p>
                        <strong>Break Statement</strong>
                        <p>It brings control out of the loop</p>
                        <strong>Pass Statement</strong>
                        <p>We use pass statement to write empty loops. Pass is also used for empty
                            control statement, function and classes.</p>

                        <h3>Selection/Decision control statements</h3>
                        <p>In Python, the selection statements are also known as Decision control
                            statements or branching statements.</p>
                        <p>The selection statement allows a program to test several conditions and
                            execute instructions based on which condition is true.</p>
                        <p>Some Decision Control Statements are:</p>
                        <p>
                            <strong>• Simple if</strong>
                        </p>

                        <p>
                            <strong>• if-else</strong>
                        </p>

                        <p>
                            <strong>• nested if</strong>
                        </p>

                        <p>
                            <strong>• if-elif-else</strong>
                        </p>
                        <strong>Simple if:</strong>
                        <p>If statements are control flow statements that help us to
                            run a particular code, but only when a certain condition is met or
                            satisfied. A simple if only has one condition to check.</p>
                        <strong>if-else:</strong>
                        <p> The if-else statement evaluates the condition and will execute the
                            body of <strong>'if'</strong> if the test condition is True, but if the condition is False, then the
                            body of <strong>'else'</strong> is executed.</p>
                        <strong>nested if:</strong>
                        <p> Nested if statements are an if statement inside another if
                            statement.</p>
                        <strong>if-elif-else:</strong>
                        <p> The if-elif-else statement is used to conditionally execute a
                            statement or a block of statements.</p>

                        <h3>Python range() Function</h3>
                        <p>The <strong>range()</strong> function returns a sequence of numbers, starting from 0 by
                            default, and increments by 1 (by default), and stops before a specified
                            number.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
