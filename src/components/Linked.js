import React from 'react'

export default function Linked() {
    return (
        <>
        <div className='array-page'>
            <div className='mid'>
            <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="flse" aria-controls="panelsStayOpen-collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
    
            </div>
            <div className='side'>
                <div class="jumbotron">
                    <img src={rem} className="book-img" alt="..." />
                    <div className='details' >
                        <p class="lead" >
                            <p className='book-name'>Data Structure Using C</p>
                            <p className='book-details'>Rema Thareja | 557 Pages | 18.4 MB | English</p>
                        </p>
                        <p class="lead">
                            <a className="btn btn-primary btn-lg" href={rema} role="button"download ="Rema Thareja.pdf">Download</a>
                        </p>
                    </div>
                </div>
                <div class="jumbotron">
                    <img src={cor} className="book-img" alt="..."/>
                    <div className='details' >
                        <p className="lead" >
                            <p className='book-name'>
                            Introduction to Algorithms, Third Edition</p>
                            <p className='book-details'>Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, 
                            Clifford Stein | 1313 Pages | 4.8 MB | English</p>
                        </p>
                        <p class="lead">
                            <a className="btn btn-primary btn-lg" href={cormen} role="button"download ="Rema Thareja.pdf">Download</a>
                        </p>
                    </div>
                </div>
             </div>
        </div>
        <div className='table-content' style={{width:"100%"}}>
        <p className="practice">Practice Problems</p>
    <table class="table table-striped">
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
          <td className='prob-name'>Two Sum</td>
          <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/two-sum/" role="button"target={'_blank'} rel="noopener noreferrer">Solve</a></td>
        </tr>
        <tr>
          <th scope="row" className='num'>2</th>
          <td className='prob-name'>Next-permutation</td>
          <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/next-permutation/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
        </tr>
        <tr>
          <th scope="row" className='num'>3</th>
          <td className='prob-name'>First Missing Positive</td>
          <td className='prob-link'target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/first-missing-positive/" role="button" rel="noopener noreferrer">Solve</a></td>
        </tr>
        <tr>
          <th scope="row"className='num'>4</th>
          <td className='prob-name'>Two Sum</td>
          <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/two-sum/" role="button"target={'_blank'} rel="noopener noreferrer">Solve</a></td>
        </tr>
        <tr>
          <th scope="row" className='num'>5</th>
          <td className='prob-name'>Next-permutation</td>
          <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/next-permutation/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
        </tr>
        <tr>
          <th scope="row" className='num'>6</th>
          <td className='prob-name'>First Missing Positive</td>
          <td className='prob-link'target={'_blank'}><a className="problem-link" href="https://leetcode.com/problems/first-missing-positive/" role="button" rel="noopener noreferrer">Solve</a></td>
        </tr>
        <tr>
          <th scope="row"className='num'>7</th>
          <td className='prob-name'>Two Sum</td>
          <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/two-sum/" role="button"target={'_blank'} rel="noopener noreferrer">Solve</a></td>
        </tr>
        <tr>
          <th scope="row" className='num'>8</th>
          <td className='prob-name'>Next-permutation</td>
          <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/next-permutation/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
        </tr>
        <tr>
          <th scope="row" className='num'>9</th>
          <td className='prob-name'>First Missing Positive</td>
          <td className='prob-link'target={'_blank'} rel="noopener noreferrer"><a className="problem-link" href="https://leetcode.com/problems/first-missing-positive/" role="button" >Solve</a></td>
        </tr>
        <tr>
          <th scope="row"className='num'>10</th>
          <td className='prob-name'>Two Sum</td>
          <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/two-sum/" role="button"target={'_blank'} rel="noopener noreferrer">Solve</a></td>
        </tr>
        <tr>
          <th scope="row" className='num'>11</th>
          <td className='prob-name'>Next-permutation</td>
          <td className='prob-link'><a className="problem-link" href="https://leetcode.com/problems/next-permutation/" role="button" target={'_blank'} rel="noopener noreferrer">Solve</a></td>
        </tr>
        <tr>
          <th scope="row" className='num'>12</th>
          <td className='prob-name'>First Missing Positive</td>
          <td className='prob-link'target={'_blank'} rel="noopener noreferrer"><a className="problem-link" href="https://leetcode.com/problems/first-missing-positive/" role="button">Solve</a></td>
        </tr>
      </tbody>
    </table>
    </div>
    </>
      )
}
