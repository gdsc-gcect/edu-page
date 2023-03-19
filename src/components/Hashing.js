import React from 'react'
import rema from './rema thareja.pdf';
import cormen from './Introduction_to_Algorithms_Third_Edition_(2009).pdf';
import rem from './rema.jpg';
import cor from './cormen.jpg';
export default function Hashing() {
  return (
  
    <>
      <div className='array-page'>
        <div className='mid'>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                  <strong>What is Hashing?</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                  Hashing is a technique or process of mapping keys, and values into the hash table by using a hash function. It is done for faster access to elements. The efficiency of mapping depends on the efficiency of the hash function used.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  <strong>What are the 3 methods of closed hashing in data structure?
                  </strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">


                  In Closed hashing, three techniques are used to resolve the collision: Linear probing. Quadratic probing. Double Hashing technique.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  <strong>What is the purpose of hashing?</strong>

                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                  Hashing is the process of transforming any given key or a string of characters into another value. This is usually represented by a shorter, fixed-length value or key that represents and makes it easier to find or employ the original string. The most popular use for hashing is the implementation of hash tables.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                  <strong>What is key in hashing?</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                <div className="accordion-body">
                  The hashing key is the raw data in which to be hashed. The hashing algorithm is the algorithm which performs a function to convert the hash key to the hash value. the hash value is what is produced as a result of the hash key being passed into the hashing algorithm.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  <strong>What are the advantages of hashing?
                  </strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                <div className="accordion-body">

                  The main advantage of hash tables over other data structures is speed . The access time of an element is on average 
                   O(1), therefore lookup could be performed very fast. Hash tables are particularly efficient when the maximum number of 
                    entries can be predicted in advance.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  <strong>What is Hash Table?
                  </strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                <div className="accordion-body">
                  Hash table or hash map is a data structure used to store key-value pairs.
                  It is a collection of items stored to make it easy to find them later.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  <strong>Formula of division method of hashing:
                  </strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
                <div className="accordion-body">
                  Hash Key = Key Value % Number of Slots in the Table.
                </div>
              </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingEight">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    <strong>Formula of Linear probing of hashing
                    </strong>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
                  <div className="accordion-body">
                    P = 1 + P % MOD Table_size
                  </div>
                </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingNine">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      <strong>What is the disadvantage of hashing?
                      </strong>
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingNine">
                    <div className="accordion-body">
                      The disadvantages of hash tables include the fact that databases can degrade if they go through a large number of collisions. The probability that a collision will occur increases with the amount of data. A large number of hash functions do not have the ability to move to the next or previous data set.

                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingTen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      <strong>What are applications of hashing?
                      </strong>
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTen" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTen">
                    <div className="accordion-body">
                      An important application of secure hashes is the verification of message integrity. Comparing message digests calculated before, and after, transmission can determine whether any changes have been made to the message or file.
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
                  <td className='prob-name'>Design hashset</td>
                  <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/design-hashset/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
                </tr>

                <tr>
                  <th scope="row" className='num'>2</th>
                  <td className='prob-name'> Find Substring With Given Hash Valuer</td>
                  <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/find-substring-with-given-hash-value/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
                </tr>

                <tr>
                  <th scope="row" className='num'>3</th>
                  <td className='prob-name'>Design Add and Search Words Data Structure</td>
                  <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/design-add-and-search-words-data-structure//" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
                </tr>

                <tr>
                  <th scope="row" className='num'>4</th>
                  <td className='prob-name'> Design HashMap</td>
                  <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/design-hashmap/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
                </tr>
                
                <tr>
                  <th scope="row" className='num'>5</th>
                  <td className='prob-name'> Find Nearest Point That Has the Same X or Y Coordinate</td>
                  <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
                </tr>


              </tbody>
            </table>
          </div>
        
      </>
      )
}
