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
                  <strong>What is a Heap?</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                A Heap is a special Tree-based data structure in which the tree is a <strong>complete binary tree</strong>.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  <strong>What are the operations on Heap?</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                  We can do:
                  <ul>
                    <li> <strong>Heapify:</strong> a process of creating a heap from an array.</li>
                    <li><strong>Insertion:</strong>a process to insert an element in existing heap time complexity O(log N).</li>
                    <li><strong>Deletion:</strong> deleting the top element of the heap or the highest priority element, and then organizing the heap and returning the element with time complexity O(log N).</li>
                    <li><strong>Peek:</strong> to check or find the most prior element in the heap, (max or min element for max and min heap).</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  <strong>What are the types of Heap?</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                  Types of Heap are listed below: <br />

                  <strong>Max Heap:</strong>In a Max-Heap the key present at the root node must be greatest among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.<br />
                  <strong>Min Heap:</strong> In a Min-Heap the key present at the root node must be minimum among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.
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
              <th scope="col" className='num'>No</th>
              <th scope="col" className='prob-name'>Title</th>
              <th scope="col" className='prob-link'>Link</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <th scope="row" className='num'>1</th>
              <td className='prob-name'>Kth Largest element</td>
              <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/kth-largest-element-in-a-stream/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>2</th>
              <td className='prob-name'>Maximum Product of two numbers in an array</td>
              <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>3</th>
              <td className='prob-name'>Ugly Number II</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/ugly-number-ii/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>4</th>
              <td className='prob-name'>Sort Character by Frequency</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/sort-characters-by-frequency/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>5</th>
              <td className='prob-name'>Top k frequent numbers</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/top-k-frequent-elements/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>6</th>
              <td className='prob-name'>Task Scheduler </td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/task-scheduler/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>7</th>
              <td className='prob-name'>Cheapest Flights</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/cheapest-flights-within-k-stops/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>8</th>
              <td className='prob-name'>Path With Minimum Effort</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/path-with-minimum-effort/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>9</th>
              <td className='prob-name'>Single Threaded CPU</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/single-threaded-cpu/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>10</th>
              <td className='prob-name'>Smallest NUmber in an Infinite Set</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/smallest-number-in-infinite-set/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>11</th>
              <td className='prob-name'>Merge k Sorted Lists</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/sum-of-distances-in-tree/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>
            <tr>
              <th scope="row" className='num'>12</th>
              <td className='prob-name'>IPO</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/ipo/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}