import React from 'react'
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
        <strong>What is Linked List?</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
      A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. It consists of nodes where each node contains a data field and a pointer which points to the next node in the list.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <strong>Head Pointer</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
      In the linked list there is a <strong>head pointer</strong>, which points to the first element of the linked list, and if the list is empty then it simply points to null or nothing.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        <strong>What are the advantages of using Linked List?</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
      Here are a few advantages of a linked list that is listed below, it will help you understand why it is necessary to know. <br />

<strong>Dynamic Data structure:</strong>  The size of memory can be allocated or de-allocated at run time based on the operation insertion or deletion. <br />
<strong> of Insertion/Deletion:</strong> The insertion and deletion of elements are simpler than arrays since no elements need to be shifted after insertion and deletion, Just the address needed to be updated. <br />
<strong>Efficient Memory Utilization:</strong> As we know Linked List is a dynamic data structure the size increases or decreases as per the requirement so this avoids the wastage of memory. <br />
<strong>Implementation:</strong> Various advanced data structures can be implemented using a linked list like a stack, queue, graph, hash maps, etc.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
        <strong>Types of Linked Lists</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
      <div className="accordion-body">
      <strong>1. Single linked list <br /></strong>
      <strong>2. Double linked list <br /></strong>
      <strong>3. Circular linked list <br /></strong> 
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
                        <a className="btn btn-primary btn-lg" href={rema} role="button"download ="Rema Thareja.pdf">Download</a>
                    </div>
                </div>
            </div>
            <div className="jumbotron">
                <img src={cor} className="book-img" alt="..."/>
                <div className='details' >
                    <div className="lead" >
                        <p className='book-name'>
                        Introduction to Algorithms, Third Edition</p>
                        <p className='book-details'>Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, 
                        Clifford Stein | 1313 Pages | 4.8 MB | English</p>
                    </div>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href={cormen} role="button"download ="Rema Thareja.pdf">Download</a>
                    </p>
                </div>
            </div>
         </div>
    </div>
    <div className='table-content' style={{width:"100%"}}>
    <p className="practice">Practice Problems</p>
<table className="table table-striped">
  <thead >
    <tr>
      <th scope="col" className='num'>#</th>
      <th scope="col"className='prob-name'>Title</th>
      <th scope="col" className='prob-link'>Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"className='num'>1</th>
      <td className='prob-name'>Merge Two Sorted Lists</td>
      <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/merge-two-sorted-lists/" role="button"target={'_blank'} rel="noopener noreferrer">Solve</a></td>
    </tr>

    <tr>
      <th scope="row" className='num'>2</th>
      <td className='prob-name'>Remove Duplicates from Sorted List</td>
      <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/remove-duplicates-from-sorted-list/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
    </tr>

    <tr>
      <th scope="row" className='num'>3</th>
      <td className='prob-name'>Linked List Cycle</td>
      <td className='prob-link'target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/linked-list-cycle/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
    </tr>

    <tr>
      <th scope="row" className='num'>4</th>
      <td className='prob-name'>Intersection of Two Linked Lists</td>
      <td className='prob-link'target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/intersection-of-two-linked-lists/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
    </tr>

    <tr>
      <th scope="row" className='num'>5</th>
      <td className='prob-name'>Add Two Numbers</td>
      <td className='prob-link'target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/add-two-numbers/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
    </tr>
    
    <tr>
      <th scope="row" className='num'>6</th>
      <td className='prob-name'>Swap Nodes in Pairs</td>
      <td className='prob-link'target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/swap-nodes-in-pairs/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
    </tr>

    <tr>
      <th scope="row" className='num'>7</th>
      <td className='prob-name'>Rotate List</td>
      <td className='prob-link'target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/rotate-list/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
    </tr>

    <tr>
      <th scope="row" className='num'>8</th>
      <td className='prob-name'>Remove Nth Node From End of List</td>
      <td className='prob-link'target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
    </tr>

    <tr>
      <th scope="row" className='num'>9</th>
      <td className='prob-name'>Merge k Sorted Lists</td>
      <td className='prob-link'target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/merge-k-sorted-lists/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
    </tr>

    <tr>
      <th scope="row" className='num'>10</th>
      <td className='prob-name'>Reverse Nodes in k-Group</td>
      <td className='prob-link'target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/reverse-nodes-in-k-group/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
    </tr>

    <tr>
      <th scope="row" className='num'>11</th>
      <td className='prob-name'>Design Skiplist</td>
      <td className='prob-link'target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/design-skiplist/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
    </tr>

  </tbody>
</table>
</div>
</>
  
  )
}
