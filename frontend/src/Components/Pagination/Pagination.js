import React from "react";

const Pagination = ({ paginate, totalPages }) => {
  const pageNumbers = [];
  if (totalPages?.length > 0) {
    let total = totalPages[0]?.COUNT;
    let num = Math.ceil(total / 5);
    for (let i = 1; i <= num; i++) {
      pageNumbers.push(i);
    }
  }
  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
