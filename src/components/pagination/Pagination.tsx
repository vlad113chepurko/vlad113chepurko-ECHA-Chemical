interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <button
        className="pagination-next"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          className="pagination-btn"
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          style={{
            fontWeight: currentPage === i + 1 ? "bold" : "normal",
            margin: "0 5px",
          }}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="pagination-next"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
