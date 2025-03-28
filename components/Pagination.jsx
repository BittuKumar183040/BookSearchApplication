import React from "react";

const Pagination = ({ books, page, handlePageChange }) => {
  return (
    <nav className=" mb-10 flex justify-center">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <button
            onClick={(e) => handlePageChange(e, page - 1)}
            className={`flex items-center cursor-pointer justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg 
							hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
							${page <= 1 && " text-gray-300 border-gray-300 dark:bg-black dark:border-gray-800 dark:text-gray-700 pointer-events-none"}`}
          >
            Previous
          </button>
        </li>

        {books &&
          [...Array(books.pages)].map((_, idx) => (
            <li
              key={idx}
              className={`${idx + 1 == page ? " pointer-events-none" : "cursor-pointer"}`}
              onClick={(e) => handlePageChange(e, idx + 1)}
            >
              <p
                className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 
                  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                  ${idx + 1 == page ? "bg-blue-500 dark:bg-blue-500 text-white" : "text-gray-500 bg-white pointer-events-auto "}`}
              >
                {idx + 1}
              </p>
            </li>
          ))}
        <li>
          <button
            onClick={(e) => handlePageChange(e, page + 1)}
            className={`flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg 
                    hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                    ${books?.pages === page && " text-gray-300 border-gray-300 dark:bg-black dark:border-gray-800 dark:text-gray-700 pointer-events-none"}`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
