import React, { useEffect, useState } from "react";
import DetailPage from "../section/DetailPage";

const BookCard = ({ books: { pages, string, books }, loading }) => {
  const [showDetails, setShowDetails] = useState(null);
  const handleShowDetail = (book) => {
    setShowDetails(book);
  };

  useEffect(() => {
    if (showDetails) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showDetails]);

  return (
    <>
      {showDetails && (
        <DetailPage book={showDetails} setShowDetails={setShowDetails} />
      )}

      <div className=" px-2 py-1 ">
        <p>{string && ` Result : ${string} `}</p>
      </div>
      <div className=" h-0.5 w-1/2 bg-gray-500 rounded-r-lg mb-2"></div>
      <div className={`p-2 flex flex-wrap justify-around gap-2 select-none`}>
        {books.map((book, idx) => (
          <div
          key={book.title + idx}
          onClick={() => handleShowDetail(book)}
          className={`cursor-pointer w-40 p-1 flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700
          hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-400`}
        >
          <div className="overflow-hidden">
            {loading ? (
              <div className="w-full h-36 bg-gray-300 animate-pulse rounded-t-lg"></div>
            ) : (
              <img className="rounded-t-lg" src={book.imageLink} alt="" />
            )}
          </div>
          <div className="flex flex-col">
            {loading ? (<div className=" flex gap-4 justify-between">
              <div className="my-2 flex-1 mt-4 px-2 text-center text-md line-clamp-1 font-bold tracking-tight bg-gray-300 animate-pulse h-5 rounded-md"></div>
              <div className="my-2 mt-4 px-2 text-center text-md line-clamp-1 font-bold tracking-tight bg-gray-300 animate-pulse h-4 rounded-md"></div>
            </div>
            ) : (
              <h5 className="mb px-2 text-center text-md line-clamp-1 font-bold tracking-tight text-gray-700 dark:text-white">
                {book.title}
              </h5>
            )}
            {loading ? (
              <div className="mb-3 px-2 text-sm font-normal text-center line-clamp-1 bg-gray-300 animate-pulse h-3 rounded-md"></div>
            ) : (
              <p className="mb-3 px-2 text-sm font-normal text-center line-clamp-1 text-gray-700 dark:text-gray-400">
                {book.author}
              </p>
            )}
          </div>
        </div>
        ))}
      </div>
      <div className=" mb-10"></div>
    </>
  );
};

export default BookCard;
