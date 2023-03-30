import React from "react";
import rema from "./rema thareja.pdf";
import cormen from "./Introduction_to_Algorithms_Third_Edition_(2009).pdf";
import rem from "./rema.jpg";
import cor from "./cormen.jpg";
export default function Array() {
  return (
    <>
      <div className="array-page">
        <div className="mid">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <strong>What is Array?</strong>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse "
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  An array is a collection of elements of the same type placed
                  in contiguous memory locations that can be individually
                  referenced by using an index to a unique identifier.
                  <br/>
                  SYNTAX:{"<data type>"} array name [size1][size2].....[sizen]; 
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  <strong>What is Contiguous Memory?</strong>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  In contiguous memory allocation, when a process requests for
                  the memory, a single contiguous section of memory blocks is
                  assigned to the process according to its requirement.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  <strong>How to allocate contiguous memory?</strong>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  1. Using static array declaration. <br/>
                  2. Using alloc ( ) / malloc
                  ( ) function to allocate big chunk of memory dynamically.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side">
          <div className="jumbotron">
            <img src={rem} className="book-img" alt="..." />
            <div className="details">
              <div className="lead">
                <p className="book-name">Data Structure Using C</p>
                <p className="book-details">
                  Rema Thareja | 557 Pages | 18.4 MB | English
                </p>
              </div>
              <div className="lead">
                <a
                  className="btn btn-primary btn-lg"
                  href={rema}
                  role="button"
                  download="Rema Thareja.pdf"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
          <div className="jumbotron">
            <img src={cor} className="book-img" alt="..." />
            <div className="details">
              <div className="lead">
                <p className="book-name">
                  Introduction to Algorithms, Third Edition
                </p>
                <p className="book-details">
                  Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest,
                  Clifford Stein | 1313 Pages | 4.8 MB | English
                </p>
              </div>
              <p className="lead">
                <a
                  className="btn btn-primary btn-lg"
                  href={cormen}
                  role="button"
                  download="Introduction to Algorithms, Third Edition.pdf"
                >
                  Download
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="table-content" style={{ width: "100%" }}>
        <p className="practice">Practice Problems</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className="num">
                #
              </th>
              <th scope="col" className="prob-name">
                Title
              </th>
              <th scope="col" className="prob-link">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="num">
                1
              </th>
              <td className="prob-name">Two Sum</td>
              <td className="prob-link">
                <a
                  className="problem-link"
                  href="https://leetcode.com/problems/two-sum/"
                  role="button"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  Solve
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="num">
                2
              </th>
              <td className="prob-name">Next-permutation</td>
              <td className="prob-link">
                <a
                  className="problem-link"
                  href="https://leetcode.com/problems/next-permutation/"
                  role="button"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  Solve
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="num">
                3
              </th>
              <td className="prob-name">First Missing Positive</td>
              <td className="prob-link" target={"_blank"}>
                <a
                  className="problem-link"
                  href="https://leetcode.com/problems/first-missing-positive/"
                  role="button"
                  rel="noopener noreferrer"
                >
                  Solve
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="num">
                4
              </th>
              <td className="prob-name">Two Sum</td>
              <td className="prob-link">
                <a
                  className="problem-link"
                  href="https://leetcode.com/problems/two-sum/"
                  role="button"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  Solve
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="num">
                5
              </th>
              <td className="prob-name">Next-permutation</td>
              <td className="prob-link">
                <a
                  className="problem-link"
                  href="https://leetcode.com/problems/next-permutation/"
                  role="button"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  Solve
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="num">
                6
              </th>
              <td className="prob-name">First Missing Positive</td>
              <td className="prob-link" target={"_blank"}>
                <a
                  className="problem-link"
                  href="https://leetcode.com/problems/first-missing-positive/"
                  role="button"
                  rel="noopener noreferrer"
                >
                  Solve
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="num">
                7
              </th>
              <td className="prob-name">Two Sum</td>
              <td className="prob-link">
                <a
                  className="problem-link"
                  href="https://leetcode.com/problems/two-sum/"
                  role="button"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  Solve
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="num">
                8
              </th>
              <td className="prob-name">Next-permutation</td>
              <td className="prob-link">
                <a
                  className="problem-link"
                  href="https://leetcode.com/problems/next-permutation/"
                  role="button"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  Solve
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="num">
                9
              </th>
              <td className="prob-name">First Missing Positive</td>
              <td
                className="prob-link"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <a
                  className="problem-link"
                  href="https://leetcode.com/problems/first-missing-positive/"
                  role="button"
                >
                  Solve
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="num">
                10
              </th>
              <td className="prob-name">Two Sum</td>
              <td className="prob-link">
                <a
                  className="problem-link"
                  href="https://leetcode.com/problems/two-sum/"
                  role="button"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  Solve
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="num">
                11
              </th>
              <td className="prob-name">Next-permutation</td>
              <td className="prob-link">
                <a
                  className="problem-link"
                  href="https://leetcode.com/problems/next-permutation/"
                  role="button"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  Solve
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="num">
                12
              </th>
              <td className="prob-name">First Missing Positive</td>
              <td
                className="prob-link"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <a
                  className="problem-link"
                  href="https://leetcode.com/problems/first-missing-positive/"
                  role="button"
                >
                  Solve
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
