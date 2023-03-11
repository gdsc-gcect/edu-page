import React from 'react'
import rema from './rema thareja.pdf';
import cormen from './Introduction_to_Algorithms_Third_Edition_(2009).pdf';
import rem from './rema.jpg';
import cor from './cormen.jpg';
export default function Array() {
  return (
    <>
    <div className='array-page'>
        <div className='mid'>
            <ul id='array-q'>
                <li>
                     <label for="first">What is Array?<span>&#x3e;</span></label>
                    <div className="q-ans">
                        <p>
                            An array is a collection of similar data elements. These data elements have the same data type. 
                            The elements of the array are stored in consecutive memory locations and are referenced by an 
                            index (also known as the subscript).
                        </p>
                    </div>
                </li>
                <li>
                    <label for="first">In C, arrays are declared using the following syntax:<span>&#x3e;</span>
                    </label>
                    <div className="q-ans">
                        <p>
                             type name[size];<br/>
                             For example,<br/>
                             int array[100];

                        </p>
                    </div>
                </li>
                <li>
                    <label for="first">Arrays are generally used when we want to store large amount of similar type of data. But they 
                    have the following limitations:<span>&#x3e;</span></label>
                    <div className="q-ans">
                        <p>
                            Arrays are of fixed size.<br/>
                            Data elements are stored in contiguous memory locations which may not be always available.<br/>
                            Insertion and deletion of elements can be problematic because of shifting of elements from 
                            their positions.
                        </p>
                    </div>
                </li>
                <li>
                    <label for="first">Arrays are generally used when we want to store large amount of similar type of data. But they 
                    have the following limitations:<span>&#x3e;</span></label>
                    <div className="q-ans">
                        <p>
                            Arrays are of fixed size.<br/>
                            Data elements are stored in contiguous memory locations which may not be always available.<br/>
                            Insertion and deletion of elements can be problematic because of shifting of elements from 
                            their positions.
                        </p>
                    </div>
                </li>
                <li>
                    <label for="first">Arrays are generally used when we want to store large amount of similar type of data. But they 
                    have the following limitations:<span>&#x3e;</span></label>
                    <div className="q-ans">
                        <p>
                            Arrays are of fixed size.<br/>
                            Data elements are stored in contiguous memory locations which may not be always available.<br/>
                            Insertion and deletion of elements can be problematic because of shifting of elements from 
                            their positions.
                        </p>
                    </div>
                </li>
                
            </ul>
        </div>
        <div className='side'>
            <div class="jumbotron">
                <img src={rem} className="book-img" alt="..." />
                <div className='details' style={{paddingTop:"30px"}}>
                    <p class="lead" style={{margin:"10px"}}>
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
                <div className='details' style={{paddingTop:"30px"}}>
                    <p class="lead" style={{margin:"10px"}}>
                        <p className='book-name'>
                        Introduction to Algorithms, Third Edition</p>
                        <p className='book-details'>Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, 
                        Clifford Stein | 1313 Pages | 4.8 MB | English</p>
                    </p>
                    <p class="lead">
                        <a className="btn btn-primary btn-lg" href={cormen} role="button"download ="Introduction-to-Algorithms,Third-Edition.pdf">Download</a>
                    </p>
                </div>
            </div>
         </div>
    </div>
    <div className='table-content'>
    <p className="practice">Practice Problems</p>
<table class="table table-striped">
  <thead>
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
