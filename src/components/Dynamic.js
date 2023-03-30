import React from 'react'
import rema from './rema thareja.pdf';
import cormen from './Introduction_to_Algorithms_Third_Edition_(2009).pdf';
import rem from './rema.jpg';
import cor from './cormen.jpg';
export default function Dynamic() {
  return (
  
    <>
      <div className='array-page'>
        <div className='mid'>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                  <strong>What is Dynamic Programming?</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                Dynamic Programming is a technique in computer programming that helps to efficiently solve a class of problems that have overlapping subproblems and optimal substructure property.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  <strong>What are the different types of dynamic programming?
                  </strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">


                There are two approaches to dynamic programming: <br></br><strong>  Top-down approach.<br></br> Bottom-up approach. </strong>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  <strong>Why is it called dynamic programming?</strong>

                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                The word dynamic was chosen by Bellman to capture the time-varying aspect of the problems, and because it sounded impressive. The word programming referred to the use of the method to find an optimal program, in the sense of a military schedule for training or logistics.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                  <strong>What are 4 applications of dynamic programming?</strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                <div className="accordion-body">
                The word dynamic was chosen by Bellman to capture the time-varying aspect of the problems, and because it sounded impressive. The word programming referred to the use of the method to find an optimal program, in the sense of a military schedule for training or logistics.
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  <strong>Where is dynamic programming used?
                  </strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                <div className="accordion-body">

                Dynamic programming is used where we have problems, which can be divided into similar sub-problems, so that their results can be re-used. Mostly, these algorithms are used for optimization. Before solving the in-hand sub-problem, dynamic algorithm will try to examine the results of the previously solved sub-problems.
                </div>
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
                  <td className='prob-name'>Climbing Stairs</td>
                  <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/climbing-stairs" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
                </tr>

                <tr>
                  <th scope="row" className='num'>2</th>
                  <td className='prob-name'> Unique paths</td>
                  <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/unique-paths" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
                </tr>

                <tr>
                  <th scope="row" className='num'>3</th>
                  <td className='prob-name'>Unique paths 2</td>
                  <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/unique-paths-ii" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
                </tr>

                <tr>
                  <th scope="row" className='num'>4</th>
                  <td className='prob-name'> Pascal's Triangle</td>
                  <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/pascals-triangle" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
                </tr>
                
                <tr>
                  <th scope="row" className='num'>5</th>
                  <td className='prob-name'>Pascals Triangle-2</td>
                  <td className='prob-link' target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/pascals-triangle-ii" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
                </tr>

                
              </tbody>
            </table>
          </div>
        
      </>
      )
}