import React from "react";
import rema from "./rema thareja.pdf";
import cormen from "./Introduction_to_Algorithms_Third_Edition_(2009).pdf";
import rem from "./rema.jpg";
import cor from "./cormen.jpg";

export default function Stack() {
  return (
    <>
      <div className='array-page'>
        <div className='mid'>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                  <strong>What is Stack?</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                  A Stack is a linear data structure that follows the <strong>LIFO (Last-In-First-Out)</strong> principle. It contains only one pointer <strong>top pointer</strong> pointing to the topmost element of the stack. Whenever an element is added in the stack, it is added on the top of the stack, and the element can be deleted only from the stack. In other words, <strong>a stack can be defined as a container in which insertion and deletion can be done from the one end known as the top of the stack.</strong>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  <strong>Standard Stack Operations</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                  <strong>push():</strong> When we insert an element in a stack then the operation is known as a push. If the stack is full then the overflow condition occurs. <br />
                  <strong>pop():</strong> When we delete an element from the stack, the operation is known as a pop. If the stack is empty means that no element exists in the stack, this state is known as an underflow state. <br />
                  <strong>peek():</strong> It returns the element at the given position.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  <strong>Time Complexity and Space Complexity of different stack operations</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                  <strong>push():</strong><br />
                  <strong>Time Complexity:</strong> O(1),  In the push function a single element is inserted at the last position. This takes a single memory allocation operation which is done in constant time. <br />
                  <strong>Space Complexity:</strong> O(1), As no extra space is being used. <br />
                  <strong>pop():</strong><br />
                  <strong>Time Complexity:</strong> O(1), In array implementation, only an arithmetic operation is performed i.e., the top pointer is decremented by 1. This is a constant time function. <br />
                  <strong>Space Complexity:</strong> O(1), No extra space is utilized for deleting an element from the stack.
                  <br />
                  <strong>peek():</strong><br />
                  <strong>Time Complexity:</strong> O(1), Only a memory address is accessed. This is a constant time operation. <br />
                  <strong>Space Complexity:</strong> O(1), No extra space is utilized to access the value.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                  <strong>Some applications of stack</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                <div className="accordion-body">
                  <strong>1. String Revarsal:</strong> Stack is used for reversing a string.
                  <strong>2. DFS(Depth First Search):</strong> This search is implemented on a Graph, and Graph uses the stack data structure.
                  <strong>3. Expression conversion:</strong> Stack can also be used for expression conversion. This is one of the most important applications of stack. <br /> <br />
                    Infix to prefix <br />
                    Infix to postfix <br />
                    Prefix to infix <br />
                    Prefix to postfix <br />
                    Postfix to infix
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className='side'>
          <div className="jumbotron">
            <img src={rem} className="book-img" alt="..." />
            <div className='details' >
              <div className="lead" >
                <p className='book-name'>Data Structure Using C</p>
                <p className='book-details'>Rema Thareja | 557 Pages | 18.4 MB | English</p>
              </div>
              <div className="lead">
                <a className="btn btn-primary btn-lg" href={rema} role="button" download="Rema Thareja.pdf">Download</a>
              </div>
            </div>
          </div>
          <div className="jumbotron">
            <img src={cor} className="book-img" alt="..." />
            <div className='details' >
              <div className="lead" >
                <p className='book-name'>
                  Introduction to Algorithms, Third Edition</p>
                <p className='book-details'>Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest,
                  Clifford Stein | 1313 Pages | 4.8 MB | English</p>
              </div>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href={cormen} role="button" download="Rema Thareja.pdf">Download</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='table-content' style={{ width: "100%" }}>
        <p className="practice">Practice Problems</p>
        <table className="table table-striped">
          <thead >
            <tr>
              <th scope="col" className='num'>#</th>
              <th scope="col" className='prob-name'>Title</th>
              <th scope="col" className='prob-link'>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className='num'>1</th>
              <td className='prob-name'>Merge Two Sorted Lists</td>
              <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/merge-two-sorted-lists/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>2</th>
              <td className='prob-name'>Remove Duplicates from Sorted List</td>
              <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/remove-duplicates-from-sorted-list/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>3</th>
              <td className='prob-name'>Linked List Cycle</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/linked-list-cycle/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>4</th>
              <td className='prob-name'>Intersection of Two Linked Lists</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/intersection-of-two-linked-lists/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>5</th>
              <td className='prob-name'>Add Two Numbers</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/add-two-numbers/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>6</th>
              <td className='prob-name'>Swap Nodes in Pairs</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/swap-nodes-in-pairs/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>7</th>
              <td className='prob-name'>Rotate List</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/rotate-list/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>8</th>
              <td className='prob-name'>Remove Nth Node From End of List</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>9</th>
              <td className='prob-name'>Merge k Sorted Lists</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/merge-k-sorted-lists/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>10</th>
              <td className='prob-name'>Reverse Nodes in k-Group</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/reverse-nodes-in-k-group/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>11</th>
              <td className='prob-name'>Design Skiplist</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/design-skiplist/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

          </tbody>
        </table>
      </div>
    </>

  );
}
