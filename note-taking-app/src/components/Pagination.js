import React from 'react';

const Pagination = ({ totalNotes, notesPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalNotes / notesPerPage);

    return (
        <div className="pagination">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {[...Array(totalPages).keys()].map(num => (
                <button
                    key={num + 1}
                    onClick={() => onPageChange(num + 1)}
                    className={currentPage === num + 1 ? 'active' : ''}
                >
                    {num + 1}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
