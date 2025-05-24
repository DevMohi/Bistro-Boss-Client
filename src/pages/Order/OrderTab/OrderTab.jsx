import { useState } from "react";
import FoodCard from "../../Shared/FoodCard/FoodCard";

export default function OrderTab({ items = [] }) {
  const itemsPerPage = 6;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(start, start + itemsPerPage);
  const goToPage = (page) =>
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));

  return (
    <div>
      {/* grid of cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {currentItems.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>

      {/* pagination controls */}
      <nav
        aria-label="Pagination"
        className="flex justify-center items-center mt-8 space-x-3"
      >
        {/* Prev button */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg bg-yellow-100 text-yellow-800 hover:bg-yellow-200 disabled:opacity-50 transition"
        >
          Prev
        </button>

        {/* page bullets */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`
              w-10 h-10 flex items-center justify-center rounded-full border-2 transition
              ${
                page === currentPage
                  ? "bg-yellow-500 text-white border-yellow-600 shadow-lg"
                  : "bg-white text-yellow-600 border-yellow-300 hover:bg-yellow-50"
              }
            `}
          >
            {page}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg bg-yellow-100 text-yellow-800 hover:bg-yellow-200 disabled:opacity-50 transition"
        >
          Next
        </button>
      </nav>
    </div>
  );
}
