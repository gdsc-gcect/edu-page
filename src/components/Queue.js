import React from 'react'
import rema from './rema thareja.pdf';
import cormen from './Introduction_to_Algorithms_Third_Edition_(2009).pdf';
import rem from './rema.jpg';
import cor from './cormen.jpg';

export default function Queue() {
  return (
    <>
      <div className='array-page'>
        <div className='mid'>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                  <strong>What is Queue Data Structure?</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                  A Queue is defined as a linear data structure that is open at both ends and the operations are performed in <strong>First In First Out (FIFO)</strong> order.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  <strong>Standard Queue Operations</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                  <strong>enqueue():</strong> Add an element to the end of the queue. <br />
                  <strong>dequeue():</strong> Remove an element from the front of the queue. <br />
                  <strong>peek():</strong> Get the value of the front of the queue without removing it.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  <strong>Time Complexity and Space Complexity of different queue operations</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                  <strong>enqueue():</strong><br />
                  <strong>Time Complexity:</strong> O(1), In enqueue function a single element is inserted at the last position. This takes a single memory allocation operation which is done in constant time. <br />
                  <strong>Space Complexity:</strong> O(1). As no extra space is being used. <br />
                  <strong>dequeue():</strong><br />
                  <strong>Time Complexity:</strong> O(1). In array implementation, only an arithmetic operation is performed i.e., the front pointer is incremented by 1. This is a constant time function. <br />
                  <strong>Space Complexity:</strong> O(1). No extra space is utilized for deleting an element from the queue.
                  <br />
                  <strong>peek():</strong><br />
                  <strong>Time Complexity:</strong> O(1). In this operation, only a memory address is accessed. This is a constant time operation. <br />
                  <strong>Space Complexity:</strong> O(1). No extra space is utilized to access the first value.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                  <strong>Variables used in Queue</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                <div className="accordion-body">
                  <strong>Front:</strong> the index where the first element is stored in the array representing the queue.<br />
                  <strong>Rear:</strong> the index where the last element is stored in an array representing the queue.<br />
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
              <th scope="col" className='num'>#</th>
              <th scope="col" className='prob-name'>Title</th>
              <th scope="col" className='prob-link'>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className='num'>1</th>
              <td className='prob-name'>Implement Queue using array</td>
              <td className='prob-link'><a className="problem-link" href="https://practice.geeksforgeeks.org/problems/implement-queue-using-array/1?page=1&category[]=Queue&sortBy=difficulty" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>2</th>
              <td className='prob-name'>Queue Reversal</td>
              <td className='prob-link'><a className="problem-link" href="https://practice.geeksforgeeks.org/problems/queue-reversal/1?page=1&category[]=Queue&sortBy=difficulty" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>3</th>
              <td className='prob-name'>Implement Queue using Linked List</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://practice.geeksforgeeks.org/problems/implement-queue-using-linked-list/1?page=1&category[]=Queue&sortBy=difficulty" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>4</th>
              <td className='prob-name'>Queue Push & Pop</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://practice.geeksforgeeks.org/problems/queue-designer/1?page=1&category[]=Queue&sortBy=difficulty" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>5</th>
              <td className='prob-name'>Queue using two Stacks</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1?page=1&category[]=Queue&sortBy=difficulty" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>6</th>
              <td className='prob-name'>Stack using two queues</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1?page=1&category[]=Queue&sortBy=difficulty" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>7</th>
              <td className='prob-name'>Reverse First K elements of Queue</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://practice.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1?page=1&category[]=Queue&sortBy=difficulty" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>8</th>
              <td className='prob-name'>Queue Operations</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://practice.geeksforgeeks.org/problems/queue-operations/1?page=1&category[]=Queue&sortBy=difficulty" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

            <tr>
              <th scope="row" className='num'>9</th>
              <td className='prob-name'>Deque Implementations</td>
              <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://practice.geeksforgeeks.org/problems/deque-implementations/1?page=1&category[]=Queue&sortBy=difficulty" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
            </tr>

          </tbody>
        </table>
      </div>
    </>

  )
}
