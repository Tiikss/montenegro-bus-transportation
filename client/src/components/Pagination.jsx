import React from "react";
import "../styles/pagination.css";

export const Pagination = ({ currentPage, totalPages, paginate }) => {
    return (
        <nav>
            <ul className="pagination">
                <li
                    className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                    }`}
                >
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            if (currentPage > 1) {
                                paginate(currentPage - 1);
                            }
                        }}
                        href="!#"
                        className="page-link"
                    >
                        ←
                    </a>
                </li>

                <li
                    className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                    }`}
                >
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            if (currentPage < totalPages) {
                                paginate(currentPage + 1);
                            }
                        }}
                        href="!#"
                        className="page-link"
                    >
                        →
                    </a>
                </li>
            </ul>
        </nav>
    );
};
