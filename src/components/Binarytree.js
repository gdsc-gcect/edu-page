import React from 'react'
import rema from './rema thareja.pdf';
import cormen from './Introduction_to_Algorithms_Third_Edition_(2009).pdf';
import rem from './rema.jpg';
import cor from './cormen.jpg';
export default function Binarytree() {
  return (
    <>
    <div className='array-page'>
        <div className='mid'>
        <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
        <strong>What is Binary Search Tree?</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
      A binary search tree is a sorted binary tree, where we can easily search for any key using the binary search algorithm. To sort the BST, it has to have the following properties: The node's left subtree contains only a key that's smaller than the node's key.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <strong>Time Complexity of binary search tree algorithm
</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
      Time complexity -
Insertion : O(n)
Searching (h) (h: Height of the binary search tree)
Deletion : O(n)
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        <strong>Time Complexity of binary search tree algorithm</strong>
        
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
      Space complexity: O(h), where h is the height of the BST. This is because the maximum amount of space needed to store the recursion stack would be h.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
        <strong>What are the different types of BST traversal?</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
      <div className="accordion-body">
      There are several methods of traversing trees. Among them are the inorder, preorder and postorder traversal of nodes.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <strong>Is AVL a type of BST?
</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
      <div className="accordion-body">
     
Every AVL tree is a binary search tree because the AVL tree follows the property of the BST. Each node in the Binary Search tree consists of three fields, i.e., left subtree, node value, and the right subtree.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingSix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <strong>What is application of BST?
</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
      <div className="accordion-body">
      BSTs are used for indexing and multi-level indexing. They are also helpful to implement various searching algorithms. 
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <strong>What are the advantages of BST?
</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
      <div className="accordion-body">
      When balanced, BST is quick at insertion and deletion. It has a temporal complexity of O and is quick (log n). BST is another tool for quick searching, with most operations having an O(log n) time complexity. BST works efficiently.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <strong>What are the advantages of BST?
</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
      <div className="accordion-body">
      When balanced, BST is quick at insertion and deletion. It has a temporal complexity of O and is quick (log n). BST is another tool for quick searching, with most operations having an O(log n) time complexity. BST works efficiently.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingNine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <strong>What is BST with example?
</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingNine">
      <div className="accordion-body">
      A binary search tree, also known as ordered binary tree is a binary tree wherein the nodes are arranged in a order. The order is :

a) All the values in the left sub-tree has a value less than that of the root node.

b) All the values in the right node has a value greater than the value of the root node.

c) The same rule is carried forward to all the sub-tree in tree.


      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <strong>Why is it called binary search tree?
</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTen" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTen">
      <div className="accordion-body">
      Binary search tree is a data structure that quickly allows us to maintain a sorted list of numbers. It is called a binary tree because each tree node has a maximum of two children.
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
      <td className='prob-name'>Recover binary search tree</td>
      <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/recover-binary-search-tree/" role="button"target={'_blank'} rel="noopener noreferrer">Solve</a></td>
    </tr>

    <tr>
      <th scope="row" className='num'>2</th>
      <td className='prob-name'>binary-search-tree-iterator</td>
      <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/binary-search-tree-iterator/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
    </tr>

    <tr>
      <th scope="row" className='num'>3</th>
      <td className='prob-name'>Balance-a-binary-search-tree</td>
      <td className='prob-link'target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/balance-a-binary-search-tree/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
    </tr>

    <tr>
                  <th scope="row" className='num'>4</th>
                  <td className='prob-name'>Lowest Common Ancestor</td>
                  <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://www.hackerrank.com/challenges/binary-search-tree-lowest-common-ancestor/problem" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
                </tr>
                
                <tr>
                  <th scope="row" className='num'>5</th>
                  <td className='prob-name'> longest root-to-leaf path</td>
                  <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://www.hackerrank.com/challenges/30-binary-search-trees/problem" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
                </tr>
    
  </tbody>
</table>
</div>
</>
  
  )
}
