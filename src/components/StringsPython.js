import React, { useState } from "react";
import { Link } from "react-router-dom";
import py from "./py.png"

export default function StringsPython() {
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
                                    <Link className="lan-link" to="/programming/python/ConditionalAndLooping">
                                        Conditional and looping Statements
                                    </Link>
                                </li>
                                <hr className="featurette-divider" style={{ color: "#a6a6af" }} />
                                <li>
                                    <Link className="lan-link-active" to="/programming/python/StringsPython">
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
                    <h3>Iterate over characters of a string in Python</h3>
                    <div className="program-full-q">

                        <p>
                            In Python, while operating with String, one can do multiple operations on it.
                        </p>

                        <h3>String Operators in Python</h3>
                        <p>In python, String operators represent the different types of operations that
                            can be employed on the program's string type of variables. Python allows
                            several string operators that can be applied on the python string which are
                            shown below:
                        </p>
                        <p>
                            <strong>• Assignment operator: “=.”</strong>
                        </p>

                        <p>
                            <strong>• Concatenate operator: “+.”</strong>
                        </p>

                        <p>
                            <strong>• String repetition operator: “*.”</strong>
                        </p>

                        <p>
                            <strong>• String slicing operator: “[]”</strong>
                        </p>

                        <p>
                            <strong>• String comparison operator: “==” & “!=”</strong>
                        </p>

                        <p>
                            <strong>• Membership operator: “in” & “not in”</strong>
                        </p>

                        <p>
                            <strong>• Escape sequence operator: “\.”</strong>
                        </p>

                        <p>
                            <strong>• String formatting operator: “%” & “{ }”</strong>
                        </p>

                        <strong>Assignment Operator “=.”</strong>
                        <p>Python string can be assigned to any variable with an assignment
                            operator “= “. Python string can be defined with either single quotes [''], double quotes[“ ”] or triple quotes[‘’’ ‘’’]. var_name = “string” assigns
                            “string” to variable var_name.</p>

                        <strong>Concatenate Operator “+.”</strong>
                        <p>Two strings can be concatenated or joined using the “+” operator in python.</p>

                        <strong>String Repetition Operator “*.”</strong>
                        <p>The same string can be repeated in python by n times using string*n.</p>

                        <strong>String slicing operator “[]”</strong>
                        <p>Characters from a specific index of the string can be accessed with the
                            string[index] operator. The index is interpreted as a positive index starting
                            from 0 from the left side and a negative index starting from -1 from the
                            right side.</p>

                        <p>
                            <strong>• string[a]:</strong> Returns a character from a positive index a of the string
                            from the left side as displayed in the index graph above.
                        </p>

                        <p>
                            <strong>• string[-a]:</strong>: Returns a character from a negative index a of the string
                            from the right side as displayed in the index graph above.
                        </p>

                        <p>
                            <strong>• string[a:b]:</strong> Returns characters from positive index a to positive
                            index b of the as displayed in index graph above.
                        </p>

                        <p>
                            <strong>• string[a:-b]:</strong> Returns characters from positive index a to the negative
                            index b of the string as displayed in the index graph above.
                        </p>

                        <p>
                            <strong>• string[a:]:</strong> Returns characters from positive index a to the negative
                            index b of the string as displayed in the index graph above.
                        </p>

                        <p>
                            <strong>• string[:b] </strong> Returns characters from the start of the string to the
                            positive index b.
                        </p>

                        <p>
                            <strong>• string[-a:]:</strong> Returns characters from negative index a to the end of
                            the string.
                        </p>

                        <p>
                            <strong>• string[:-b]:</strong> Returns characters from the start of the string to the
                            negative index b.
                        </p>

                        <p>
                            <strong>• string[::-1]:</strong> Returns a string with reverse order.
                        </p>

                        <strong>String Comparison Operator “==” & “!=”</strong>
                        <p>The string comparison operator in python is used to compare two strings.</p>
                        <p>• “==” operator returns Boolean True if two strings are same and
                            return Boolean False if two strings are not same.</p>
                        <p>• “!=” operator returns Boolean True if two strings are not same and
                            returns Boolean False if two strings are same.</p>
                        <p>These operators are mainly used along with if condition to compare two
                            strings where the decision is to be taken based on string comparison.</p>

                        <strong>Membership Operator “in” & “not in”</strong>
                        <p>Membership operator is used to search whether the specific character is
                            part/member of a given input python string.</p>
                        <p>• <strong>“a” in the string:</strong>Returns boolean True if “a” is in the string and
                            returns False if “a” is not in the string.</p>
                        <p>• <strong>“a” not in the string:</strong>: Returns boolean True if “a” is not in the string
                            and returns False if “a” is in the string.</p>
                        <p>A membership operator is also useful to find whether a specific substring
                            is part of a given string.</p>

                        <strong>Escape Sequence Operator “\.”</strong>
                        <p>To insert a non-allowed character in the given input string, an escape
                            character is used. An escape character is a “\” or “backslash” operator
                            followed by a non-allowed character. An example of a non-allowed
                            character in python string is inserting double quotes in the string
                            surrounded by double-quotes.</p>

                        <strong>String Formatting Operator “%.”</strong>
                        <p>String formatting operator is used to format a string as per requirement.
                            To insert another type of variable along with string, the “%” operator is
                            used along with python string. “%” is prefixed to another character
                            indicating the type of value we want to insert along with the python
                            string.</p>
                        <strong><ul>
                            <li>• %d for Signed decimal integer</li>
                            <li>• %u for Unsigned decimal integer</li>
                            <li>• %c for Character</li>
                            <li>• %s for String</li>
                            <li>• %f for Floating-point real number</li>
                            </ul></strong>
    
                    </div>
                </div>
            </div>
        </div>
    )
}
