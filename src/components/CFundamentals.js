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
                  <Link className="lan-link" to="/programming/C/Loop">
                  C loop
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
                    Errors and Exceptions 
                  </Link>
                </li>
                <hr className="featurette-divider" style={{color:"#a6a6af"}}/>
                <li>
                  <Link className="lan-link" to="/">
                    Errors 
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
                    OOP 
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
          <h2><center><u>BASIC OF C</u></center></h2>
          <div className="program-full-q">
            <h3>C TOKENS:</h3>
            <p>
              
            </p>
            <p>The smallest individual units are known as tokens. C has six types of tokens.
              <strong>
 <br></br>1: Identifiers<br></br>
 2: Keywords<br>
 </br>
 3: Constants<br></br>
 4: Strings<br></br>
 5: Special Symbols<br>
 </br>
 6: Operators
 </strong>
 <h2>Identifiers in C</h2>
<p>These are used to name the arrays, functions, structures, variables, etc. The identifiers are user-defined words in the C language. These can consist of lowercase letters, uppercase letters, digits, or underscores, but the starting letter should always be either an alphabet or an underscore. We cannot make use of identifiers in the form of keywords. Here are the rules that we must follow when constructing the identifiers:</p>
<ul>
<li>The identifiers must not begin with a numerical digit.</li>
<li>The first character used in an identifier should be either an underscore or an alphabet. After that, any of the characters, underscores, or digits can follow it.</li>
<li>Both- the lowercase and uppercase letters are distinct in an identifier. Thus, we can safely say that an identifier is case-sensitive.</li>
<li>We cannot use an identifier for representing the keywords.</li>
<li>An identifier does not specify blank spaces or commas.</li>
<li>The maximum length of an identifier is 31 characters.</li>
<li>We must write identifiers in such a way that it is not only meaningful- but also easy to read and short.</li>
</ul>

<h2>Keywords in C</h2>
<p>We can define the keywords as the reserved or pre-defined words that hold their own importance. It means that every keyword has a functionality of its own. Since the keywords are basically predefined words that the compilers use, thus we cannot use them as the names of variables. If we use the keywords in the form of variable names, it would mean that we assign a different meaning to it- something that isn&#8217;t allowed. The C language provides a support for 32 keywords, as mentioned below:</p>
<table class="table table-bordered">
<tbody>
<tr>
<td><strong>auto</strong></td>
<td><strong>enum</strong></td>
<td><strong>const</strong></td>
<td><strong>goto</strong></td>
</tr>
<tr>
<td>double</td>
<td>case</td>
<td>float</td>
<td>default</td>
</tr>
<tr>
<td>struct</td>
<td>register</td>
<td>unsigned</td>
<td>sizeof</td>
</tr>
<tr>
<td>int</td>
<td>typedef</td>
<td>short</td>
<td>volatile</td>
</tr>
<tr>
<td>break</td>
<td>extern</td>
<td>continue</td>
<td>if</td>
</tr>
<tr>
<td>else</td>
<td>char</td>
<td>for</td>
<td>do</td>
</tr>
<tr>
<td>switch</td>
<td>return</td>
<td>void</td>
<td>static</td>
</tr>
<tr>
<td>long</td>
<td>union</td>
<td>signed</td>
<td>while</td>
</tr>
</tbody>
</table>

<h2>Operators in C</h2>
<p>The operators in C are the special symbols that we use for performing various functions. Operands are those data items on which we apply the operators. We apply the operators in between various operands. On the basis of the total number of operands, here is how we classify the operators:</p>
<ul>
<li>Unary Operator</li>
<li>Binary Operator</li>
<li>Ternary Operator</li>
</ul>
<h3>Unary Operator</h3>
<p>The unary operator in c is a type of operator that gets applied to one single operand, for example: (&#8211;) decrement operator, (++) increment operator, (type)*, sizeof, etc.</p>
<h3>Binary Operator</h3>
<p>Binary operators are the types of operators that we apply between two of the operands. Here is a list of all the binary operators that we have in the C language:</p>
<ul>
<li>Relational Operators</li>
<li>Arithmetic Operators</li>
<li>Logical Operators</li>
<li>Shift Operators</li>
<li>Conditional Operators</li>
<li>Bitwise Operators</li>
<li>Misc Operator</li>
<li>Assignment Operator</li>
</ul>
<h3>Ternary Operator</h3>
<p>Using this operator would require a total of three operands. For instance, we can use the ?: in place of the if-else conditions.</p>

<h2>Strings in C</h2>
<p>The strings in C always get represented in the form of an array of characters. We have a &#8216;\0&#8242; null character at the end of any string- thus, this null character represents the end of that string. In C language, double quotes enclose the strings, while the characters get enclosed typically within various single characters. The number of characters in a string decides the size of that string.</p>
<p>Now, there are different ways in which we can describe a string:</p>
<p>char x[9] = &#8220;chocolate&#8217;; // Here, the compiler allocates a total of 9 bytes to the &#8216;x&#8217; array.</p>
<p>char x[] = &#8216;chocolate&#8217;; // Here, the compiler performs allocation of memory during the run time.</p>


<h2>Special Characters in C</h2>
<p>We also use some of the special characters in the C language, and all of them hold a special meaning that we cannot use for any other purpose.</p>
<ul>
<li>() Simple brackets &#8211; We use these during function calling as well as during function declaration. For instance, the function printf() is pre-defined.</li>
<li>[ ] Square brackets &#8211; The closing and opening brackets represent the multidimensional and single subscripts.</li>
<li>(,) Comma &#8211; We use the comma for separating more than one statement, separating the function parameters used in a function call, and for separating various variables when we print the value of multiple variables using only one printf statement.</li>
<li>{ } Curly braces &#8211; We use it during the closing as well as opening of any code. We also use the curly braces during the closing and opening of the loops.</li>
<li>(*) Asterisk &#8211; We use this symbol for representing the pointers and we also use this symbol as a type of operator for multiplication.</li>
<li>(#) Hash/preprocessor &#8211; We use it for the preprocessor directive. This processor basically denotes that the user is utilizing the header file.</li>
<li>(.) Period &#8211; We use the period symbol for accessing a member of a union or a structure.</li>
<li>(~) Tilde &#8211; We use this special character in the form of a destructor for free memory.</li>
</ul>

<h2>Constant in C</h2>
<p>Constant is basically a value of a variable that does not change throughout a program. The constants remain the same, and we cannot change their value whatsoever. Here are two of the ways in which we can declare a constant:</p>
<ul>
<li>By using a #define pre-processor</li>
<li>By using a const keyword</li>
</ul>
<p>Here is a list of the types of constants that we use in the C language:</p>
<table class="table table-bordered">
<tbody>
<tr>
<td><strong>Type of Constant</strong></td>
<td><strong>Example</strong></td>
</tr>
<tr>
<td>Floating-point constant</td>
<td>25.7, 87.4, 13.9, etc.</td>
</tr>
<tr>
<td>Integer constant</td>
<td>20, 41, 94, etc.</td>
</tr>
<tr>
<td>Hexadecimal constant</td>
<td>0x5x, 0x3y, 0x8z, etc.</td>
</tr>
<tr>
<td>Octal constant</td>
<td>033, 099, 077, 011, etc.</td>
</tr>
<tr>
<td>String constant</td>
<td>&#8220;c++&#8221;, &#8220;.net&#8221;, &#8220;java&#8221;, etc.</td>
</tr>
<tr>
<td>Character constant</td>
<td>&#8216;p&#8217;, &#8216;q&#8217;, &#8216;r&#8217;, etc.</td>
</tr>
</tbody>
</table>
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
            
          </div>
        </div>
      </div>
    </div>
  );
}
