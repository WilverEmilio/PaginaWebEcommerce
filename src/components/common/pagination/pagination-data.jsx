'use client';

import Link from "next/link";
import React from "react";

const PaginationData = ({ currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <div className="col-12">
      <div className="basic-pagination basic-pagination-2 text-center mt-20">
        <ul>
          <li>
            <Link href="#" onClick={(e) => { e.preventDefault(); onPrevious(); }} className={currentPage === 1 ? 'disabled' : ''}>
              <i className="fas fa-chevron-left"></i>
            </Link>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <Link href="#" className={currentPage === index + 1 ? 'active' : ''}>
                {index + 1}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#" onClick={(e) => { e.preventDefault(); onNext(); }} className={currentPage === totalPages ? 'disabled' : ''}>
              <i className="fas fa-chevron-right"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PaginationData;
