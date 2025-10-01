import { useState, useEffect } from 'react';

function usePagination(items, itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = items.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset to page 1 when items change (e.g., search)
  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  return {
    currentItems,
    totalPages,
    currentPage,
    setCurrentPage,
    handlePageChange
  };
}

export default usePagination;
