import React,{useState} from "react";
import { Link } from "react-router-dom";
import py from "./py.png"
export default function PythonFundamentals() {
  const [count, setCount] = useState("none");
  const navexpand=() =>{ 
    
    count==="none"?setCount("block"):setCount("none");
    
    
  }
  const corssactive=() =>{ 
    
    count==="block"?setCount("none"):setCount("none");
    
    
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
        <div className='cross'  onClick={corssactive}>	<i className="fa fa-times" aria-hidden="true"/>
            </div>
          <div id="menu" style={{width:"100%"}}>
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
                    className="lan-link-active"
                    to="/programming/python/PythonFundamentals"
                  >
                    Python Fundamentals
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/">
                    Data Types and Operators
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
          <h2>Python Tokens and Character Sets</h2>
          <div className="program-full-q">
            <h3>Character set</h3>
            <p>
              A character set is a set of valid characters acceptable by a
              programming language in scripting. In this case, we are talking
              about the Python programming language. So, the Python character
              set is a valid set of characters recognized by the Python
              language. These are the characters we can use during writing a
              script in Python. Python supports all ASCII / Unicode characters
              that include:
            </p>
            <p>
              <strong>Alphabets:</strong>
              All capital (A-Z) and small (a-z) alphabets.
            </p>

            <p>
              <strong>Digits:</strong>
              All digits 0-9.
            </p>
            <p>
              <strong> Special Symbols:</strong>
              Python supports all kind of special symbols like, ” ‘ l ; : ! ~ @
              # $ % ^ ` & * ( ) _ + – = {} [ ] \ .
            </p>
            <p>
              <strong> White Spaces:</strong>
              White spaces like tab space, blank space, newline, and carriage
              return.
            </p>
            <p>
              <strong> Other:</strong>
              All ASCII and UNICODE characters are supported by Python that
              constitutes the Python character set.
            </p>
          </div>
          <div className="program-full-q">
            <h3>Tokens</h3>
            <p>
              A token is the smallest individual unit in a python program. All
              statements and instructions in a program are built with tokens.
              The various tokens in python are :
            </p>
            <p>
              <strong>1. Keywords:</strong>
              Keywords are words that have some special meaning or significance
              in a programming language. They can’t be used as variable names,
              function names, or any other random purpose. They are used for
              their special features. In Python we have 33 keywords some of them
              are: try, False, True, class, break, continue, and, as, assert,
              while, for, in, raise, except, or, not, if, elif, print, import,
              etc.
            </p>

            <p>
              <strong>2. Identifiers:</strong>: Identifiers are the names given
              to any variable, function, class, list, methods, etc. for their
              identification. Python is a case-sensitive language and it has
              some rules and regulations to name an identifier. Here are some
              rules to name an identifier:-
            </p>
            <p>
              • As stated above, Python is case-sensitive. So case matters in
              naming identifiers. And hence abc and Abc are two different
              identifiers.
            </p>
            <p>
              {" "}
              • Identifier starts with a capital letter (A-Z) , a small letter
              (a-z) or an underscore( _ ). It can’t start with any other
              character.
            </p>
            <p>
              {" "}
              • Except for letters and underscore, digits can also be a part of
              identifier but can’t be the first character of it.
            </p>
            <p>
              {" "}
              • Any other special characters or whitespaces are strictly
              prohibited in an identifier.
            </p>
            <p> • An identifier can’t be a keyword.</p>
            <p>
              <strong> 3. Literals or Values:</strong>
              Literals are the fixed values or data items used in a source code.
              Python supports different types of literals such as:
            </p>
            <p>
              <strong> (i) String Literals:</strong>
              The text written in single, double, or triple quotes represents
              the string literals in Python.
            </p>
            <p>
              <strong> (ii) Character Literals:</strong>
              Character literal is also a string literal type in which the
              character is enclosed in single or double-quotes.
            </p>
            <p>
              <strong> (iii) Numeric Literals:</strong>
              These are the literals written in form of numbers. Python supports
              the following numerical literals:
            </p>
            <p>
              &emsp;
              <strong> • Integer Literal:</strong>
              It includes both positive and negative numbers along with 0. It
              doesn’t include fractional parts. It can also include binary,
              decimal, octal, hexadecimal literal.
            </p>
            <p>
              &emsp;
              <strong> • Float Literal:</strong>
              It includes both positive and negative real numbers. It also
              includes fractional parts.
            </p>
            <p>
              &emsp;
              <strong> • Complex Literal:</strong>: It includes a+bi numeral,
              here a represents the real part and b represents the complex part.
            </p>
            <p>
              <strong> (iv) Boolean Literals:</strong>
              Boolean literals have only two values in Python. These are True
              and False.
            </p>
            <p>
              <strong> (v) Special Literals:</strong>
              Python has a special literal ‘None’. It is used to denote nothing,
              no values, or the absence of value.
            </p>
            <p>
              <strong> (vi) Literals Collections:</strong>
              Literals collections in python includes list, tuple, dictionary,
              and sets.
            </p>
            <p>
              &emsp;
              <strong>1. List:</strong>
              It is a list of elements represented in square brackets with
              commas in between. These variables can be of any data type and can
              be changed as well.
            </p>
            <p>
              &emsp;
              <strong> 2. Tuple: </strong>
              It is also a list of comma-separated elements or values in round
              brackets. The values can be of any data type but can’t be changed.
            </p>
            <p>
              &emsp;
              <strong> 3. Dictionary:</strong>It is the unordered set of
              key-value pairs.
            </p>
            <p>
              &emsp;
              <strong> 4. Set:</strong> It is the unordered collection of
              elements in curly braces ‘{}’.
            </p>
            <p>
              <strong>4. Operators:</strong>
              These are the tokens responsible to perform an operation in an
              expression. The variables on which operation is applied are called
              operands. Operators can be unary or binary. Unary operators are
              the ones acting on a single operand like complement operator, etc.
              While binary operators need two operands to operate.
            </p>
            <p>
              <strong>5. Punctuators:</strong>
              These are the symbols that used in Python to organize the
              structures, statements, and expressions. Some of the Punctuators
              are: [ ] {}( ) @ -= += *= //= **== = , etc.
            </p>
          </div>
          <div className="program-full-q">
            <h3>Variables and Assignment</h3>
            <p>
              When programming, it is useful to be able to store information in
              variables. A variable is a string of characters and numbers
              associated with a piece of information. The assignment operator,
              denoted by the “=” symbol, is the operator that is used to assign
              values to variables in Python. The line x=1 takes the known value,
              1, and assigns that value to the variable with name “x”. After
              executing this line, this number will be stored into this
              variable. Until the value is changed or the variable deleted, the
              character x behaves like the value 1.
            </p>
          </div>
          <div className="program-full-q">
            <h3>Multiple Assignments</h3>
            <p>
              Python allows you to assign values to multiple variables in one
              line:
            </p>
            <strong>Example</strong>
            <p>x, y, z = "Orange", "Banana", "Cherry"</p>
          </div>
          <div className="program-full-q">
            <h3>Dynamic Typing</h3>
            <p>
              In statically-typed languages the variables’ types are determined
              at compile-time. In most languages that support this static typing
              model, programmers must specify the type of each variable. For
              example, if you want to define an integer variable in Java, you
              will have to explicitly specify it in the definition
            </p>
            <p>
              On the other hand, types in Python are determined during run-time
              as opposed to compile-time and thus programmers are not required
              to declare variables before using them in the code.
            </p>
          </div>
          <div className="program-full-q">
            <h3>Input and Output in Python</h3>
            <strong>How to Take Input from User in Python</strong>
            <p>
              Sometimes a developer might want to take user input at some point
              in the program. To do this Python provides an input() function.
            </p>
            <p><strong>Syntax:
</strong>input('prompt')</p>
<p><strong>Example:
</strong>name = input("Enter your name: ")</p>
          </div>
        </div>
      </div>
    </div>
  );
}
