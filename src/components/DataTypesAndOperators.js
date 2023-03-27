import React, { useState } from "react";
import { Link } from "react-router-dom";
import py from "./py.png"

export default function DataTypesAndOperators() {
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
                  <Link className="lan-link-active" to="/programming/python/DataTypesAndOperators">
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
          <h2>Python Data Types</h2>
          <div className="program-full-q">
            <p>
              Data types are the classification or categorization of data items. It represents
              the kind of value that tells what operations can be performed on a particular
              data. Since everything is an object in Python programming, data types are
              actually classes and variables are instance (object) of these classes.
            </p>
            <p>Following are the standard or built-in data type of Python:</p>
            <p>
              <strong>• Numeric</strong>
            </p>

            <p>
              <strong>• Sequence Type</strong>
            </p>

            <p>
              <strong>• Boolean</strong>
            </p>

            <p>
              <strong>• Set</strong>
            </p>

            <p>
              <strong>• Dictionary</strong>
            </p>
          </div>
          <div className="program-full-q">
            <h3>Numeric</h3>
            <p>
              In Python, numeric data type represent the data which has numeric value.
              Numeric value can be integer, floating number or even complex numbers.
              These values are defined as <strong>int, float</strong> and <strong>complex</strong> class in Python.
            </p>
            <p>
              <strong>• Integers:</strong>
              This value is represented by int class. It contains positive or
              negative whole numbers (without fraction or decimal). In Python there is
              no limit to how long an integer value can be.
            </p>

            <p>
              <strong>• Float:</strong>
              This value is represented by float class. It is a real number with
              floating point representation. It is specified by a decimal point. Optionally,
              the character e or E followed by a positive or negative integer may be
              appended to specify scientific notation.
            </p>

            <p>
              <strong>• Complex Numbers:</strong>
              Complex number is represented by complex class.
              It is specified as (real part) + (imaginary part)j. For example : 2+3j
            </p>

            <h3>Sequence Type</h3>

            <p>
              <strong>• String</strong>
            </p>

            <p>
              <strong>• List</strong>
            </p>

            <p>
              <strong>• Tuple</strong>
            </p>

            <strong>1. String:</strong>
            <p>In Python, Strings are arrays of bytes representing Unicode characters. A
              string is a collection of one or more characters put in a single quote, double-quote or triple quote. In python there is no character data type, a character is
              a string of length one. It is represented by <strong>str</strong> class.
            </p>

            <strong>Accessing elements of String</strong>
            <p>In Python, individual characters of a String can be accessed by using the
              method of Indexing. Indexing allows negative address references to access
              characters from the back of the String, e.g. -1 refers to the last character, -2
              refers to the second last character and so on.
            </p>

            <strong>2. List:</strong>
            <p>Lists are just like the arrays, declared in other languages which is a ordered
              collection of data. It is very flexible as the items in a list do not need to be of
              the same type.
            </p>

            <strong>Creating List</strong>
            <p>Lists in Python can be created by just placing the sequence inside the
              square brackets[].</p>

            <strong>Accessing elements of List</strong>
            <p>In order to access the list items refer to the index number. Use the index
              operator <strong>[ ]</strong> to access an item in a list. In Python, negative sequence
              indexes represent positions from the end of the array. Instead of having to
              compute the offset as in <strong>List[len(List)-3]</strong>, it is enough to just write List[-3].
              Negative indexing means beginning from the end, -1 refers to the last item, -
              2 refers to the second-last item, etc.</p>

            <strong>3. Tuple:</strong>
            <p>Just like list, tuple is also an ordered collection of Python objects. The only
              difference between tuple and list is that tuples are immutable i.e. tuples
              cannot be modified after it is created. It is represented by <strong>tuple</strong> class.</p>

            <strong>Creating Tuple</strong>
            <p>In Python, tuples are created by placing a sequence of values separated by
              'comma' with or without the use of parentheses for grouping of the data
              sequence. Tuples can contain any number of elements and of any datatype
              (like strings, integers, list, etc.).</p>

            <strong>Note:</strong>
            <p>Tuples can also be created with a single element, but it is a bit tricky.
              Having one element in the parentheses is not sufficient, there must be a
              trailing 'comma' to make it a tuple.</p>
            <p> Creation of Python tuple without the use of parentheses is known as
              Tuple Packing.
            </p>

            <strong>Accessing elements of Tuple</strong>
            <p>In order to access the tuple items refer to the index number. Use the index
              operator [ ] to access an item in a tuple. The index must be an integer.
              Nested tuples are accessed using nested indexing.</p>

            <h3>Boolean</h3>

            <p>Data type with one of the two built-in values, <strong>True</strong> or <strong>False</strong>. Boolean objects
              that are equal to True are truthy (true), and those equal to False are falsy
              (false). But non-Boolean objects can be evaluated in Boolean context as well
              and determined to be true or false. It is denoted by the class <strong>bool</strong>.</p>

            <strong>Note:</strong>
            <p> True and False with capital 'T' and 'F' are valid booleans otherwise
              python will throw an error.</p>

            <h3>Set</h3>

            <p>In Python, Set is an unordered collection of data type that is iterable, mutable
              and has no duplicate elements. The order of elements in a set is undefined
              though it may consist of various elements.</p>

            <strong>Creating Sets</strong>
            <p>Sets can be created by using the built-in <strong>set()</strong> function with an iterable
              object or a sequence by placing the sequence inside curly braces, separated
              by 'comma'. Type of elements in a set need not be the same, various mixed-up data type values can also be passed to the set.</p>

            <strong>Accessing elements of Sets</strong>
            <p>Set items cannot be accessed by referring to an index, since sets are
              unordered the items has no index. But you can loop through the set items
              using a for loop, or ask if a specified value is present in a set, by using
              the <strong>in</strong> keyword.</p>

            <h3>Dictionary</h3>

            <p>Dictionary in Python is an unordered collection of data values, used to store
              data values like a map, which unlike other Data Types that hold only single
              value as an element, Dictionary holds <strong>key:value</strong> pair. Key-value is provided
              in the dictionary to make it more optimized. Each key-value pair in a
              Dictionary is separated by a colon :, whereas each key is separated by a
              'comma'.
            </p>

            <strong>Creating Dictionary</strong>
            <p>In Python, a Dictionary can be created by placing a sequence of elements
              within curly <strong>{ }</strong> braces, separated by 'comma'. Values in a dictionary can be
              of any datatype and can be duplicated, whereas keys can't be repeated and
              must be immutable. Dictionary can also be created by the built-in
              function <strong>dict()</strong>. An empty dictionary can be created by just placing it to curly
              braces{ }.</p>

            <strong>Note:</strong>
            <p> Dictionary keys are case sensitive, same name but different cases of
              Key will be treated distinctly.
            </p>

            <strong>Accessing elements of Dictionary</strong>
            <p>In order to access the items of a dictionary refer to its key name. Key can be
              used inside square brackets. There is also a method called <strong>get()</strong> that will
              also help in accessing the element from a dictionary.
            </p>

            <h3>Python Operators</h3>
            <p>Python Operators in general are used to perform operations on values and
              variables. These are standard symbols used for the purpose of logical and
              arithmetic operations.</p>

            <strong>Arithmetic Operators</strong>
            <p>Arithmetic operators are used to performing mathematical operations like
              addition, subtraction, multiplication, and division.</p>
            <p>Arithmatic Operators are:</p>
            <strong>
              <ul>
                <li>Addition (+)</li>
                <li>Subtraction (-)</li>
                <li>Multiplication (*)</li>
                <li>Division float (/)</li>
                <li>Division floor (//)</li>
                <li>Modulus (%)</li>
                <li>Power (**)</li>
              </ul>
            </strong>

            <strong>Comparison Operators</strong>
            <p>Comparison of Relational operators compares the values. It either
              returns True or False according to the condition.</p>

            <p>Comparison Operators are:</p>

            <strong>
              <ul>
                <li>Greater than (&gt;)</li>
                <li>Less than (	&lt;)</li>
                <li>Equal to (==)</li>
                <li>Not equal to(!=)</li>
                <li>Greater than or equal to (&gt;=)</li>
                <li>Less than or equal to (&lt;=)</li>
              </ul>
            </strong>

            <strong>Logical Operators</strong>
            <p>Logical operators perform Logical AND, Logical OR, and Logical
              NOT operations. It is used to combine conditional statements</p>

            <p>Logical Operators are:</p>

            <strong>
              <ul>
                <li>Logical AND (x and y)</li>
                <li>Logical OR (x or y)</li>
                <li>Logical NOT (not x)</li>
              </ul>
            </strong>

            <strong>Bitwise Operators</strong>
            <p>Bitwise operators act on bits and perform the bit-by-bit operations. These are
              used to operate on binary numbers.</p>
            <p>Bitwise Operators are:</p>

            <strong>
              <ul>
                <li>Bitwise AND (x & y)</li>
                <li>Bitwise OR (x | y)</li>
                <li>Bitwise NOT (~x)</li>
                <li>Bitwise XOR (x ^ y)</li>
                <li>Bitwise right shift (x&gt;&gt;)</li>
                <li>Bitwise left shift (x&lt;&lt;)</li>
              </ul>
            </strong>

            <strong>Assignment Operators</strong>
            <p>Assignment operators are used to assigning values to the variables.</p>
            <p>Bitwise Operators are:</p>


            <ul>
              <li>• Assign value of right side of expression to left side
                operand (x = y + z)</li>
              <li>• Add AND: Add right-side operand with left side
                operand and then assign to left operand (a+=b)</li>
              <li>• Subtract AND: Subtract right operand from left
                operand and then assign to left operand (a-=b)</li>
              <li>• Multiply AND: Multiply right operand with left operand
                and then assign to left operand (a*=b)</li>
              <li>• Divide AND: Divide left operand with right operand
                and then assign to left operand (a/=b)</li>
              <li>• Modulus AND: Takes modulus using left and right
                operands and assign the result to left operand (a%=b)</li>
              <li>• Divide(floor) AND: Divide left operand with right
                operand and then assign the value(floor) to left operand (a//=b)</li>
              <li>• Exponent AND: Calculate exponent(raise power) value
                using operands and assign value to left operand (a**=b)</li>
              <li>• Performs Bitwise AND on operands and assign value to
                left operand (a&=b)</li>
              <li>• Performs Bitwise OR on operands and assign value to
                left operand (a|=b)</li>
              <li>• Performs Bitwise xOR on operands and assign value to
                left operand (a^=b)</li>
              <li>• Performs Bitwise right shift on operands and assign
                value to left operand (a&gt;&gt;=b)</li>
              <li>• Performs Bitwise left shift on operands and assign
                value to left operand (a&lt;&lt;=b)</li>
            </ul>

            <strong>Identity Operators</strong>
            <p><strong>is</strong> and <strong>is not</strong> are the identity operators both are used to check if two values
              are located on the same part of the memory. Two variables that are equal do
              not imply that they are identical.</p>

            <ul>
              <li><strong>is</strong>      True if the operands are identical</li>
              <li><strong>is not</strong>      True if the operands are not identical</li>
            </ul>

            <strong>Membership Operators</strong>
            <p><strong>in</strong> and <strong>not in</strong> are the membership operators; used to test whether a value or
              variable is in a sequence.</p>

            <ul>
              <li><strong>in</strong>      True if value is found in the sequence</li>
              <li><strong>not in</strong>      True if value is not found in the sequence
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}
