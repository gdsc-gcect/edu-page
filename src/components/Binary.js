import React from "react"
import rema from './rema thareja.pdf';
import cormen from './Introduction_to_Algorithms_Third_Edition_(2009).pdf';
import rem from './rema.jpg';
import cor from './cormen.jpg';
export default function Linked() {
  return (
    <>
      <div className='array-page'>
        <div className='mid'>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                  <strong>What is a Binary Tree?</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                  A Binary Tree is a <strong>non linear data structure</strong> consists of atmost two nodes attached to a root node,
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  <strong>How do you represent a Binary Tree?</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                  In the Binary Tree there are:
                  <ul>
                    <li>Head Pointer</li>
                    <li>Pointer to the right node</li>
                    <li>Pointer to the left node</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  <strong>What are the advantages of using Binary Tree?</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                  Few advantages of a Binary Tree that are listed below: <br />

                  <strong>DOM in HTML.:</strong> Used extensively in Document Object Model in HTML files.<br />
                  <strong> Priority Queue:</strong>  Application of binary tree that is used to search maximum or minimum in O(log N) time complexity.. <br />
                  <strong>Expression Evaluation:</strong> Used in evaluation of expression in various programs. <br />
                  <strong>Implementation:</strong> Binary Search Tree can be implmented using Binary Tree.
                </div>
              </div>
            </div>      
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                  <strong>What are the Traversal of a Binary Tree?</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                <div className="accordion-body">
                  Few advantages of a Binary Tree that are listed below: <br />

                  <strong>DOM in HTML.:</strong> Used extensively in Document Object Model in HTML files.<br />
                  <strong> Priority Queue:</strong>  Application of binary tree that is used to search maximum or minimum in O(log N) time complexity.. <br />
                  <strong>Expression Evaluation:</strong> Used in evaluation of expression in various programs. <br />
                  <strong>Implementation:</strong> Binary Search Tree can be implmented using Binary Tree.
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
                <a className="btn btn-primary btn-lg" href={cormen} role="button" download="Introduction to Algorithms, Third Edition.pdf">Download</a>
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
              <th scope="col" className='num'>No</th>
              <th scope="col" className='prob-name'>Title</th>
              <th scope="col" className='prob-link'>Link</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <th scope="row" className='num'>1</th>
              <td className='prob-name'>Binary Tree Level Traversal</td>
              <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/binary-tree-level-order-traversal/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>2</th>
              <td className='prob-name'>Binary Tree Contruction from Post Order and Inorder</td>
              <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>3</th>
              <td className='prob-name'>Binary Tree Upside Down</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/binary-tree-upside-down/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>4</th>
              <td className='prob-name'>Binary Tree Right side view</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/binary-tree-right-side-view/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>5</th>
              <td className='prob-name'>Diameter of a Binary Tree</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/diameter-of-binary-tree/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>6</th>
              <td className='prob-name'>Largest Value in each tree row</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/find-largest-value-in-each-tree-row/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>7</th>
              <td className='prob-name'>Merge Tree</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/merge-two-binary-trees/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>8</th>
              <td className='prob-name'>Maximum Binary Tree</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/maximum-binary-tree/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>9</th>
              <td className='prob-name'>Fina all the lonely nodes</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/find-all-the-lonely-nodes/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>10</th>
              <td className='prob-name'>Flip Equivalent Binary Tree</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/flip-equivalent-binary-trees/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>11</th>
              <td className='prob-name'>Sum of Distance in a Binary Tree</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/sum-of-distances-in-tree/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

          </tbody>
        </table>
      </div>
    </>

  )
}