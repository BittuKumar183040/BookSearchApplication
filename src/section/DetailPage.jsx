import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';

const DetailPage = ({ book, setShowDetails }) => {
  
  return (
    <div className=" fixed top-0 left-0 overflow-y-auto bg-white dark:bg-black dark:bg-opacity-70 bg-opacity-80 backdrop-blur-md h-screen w-full dark:text-white">
      <div className=" p-10 flex flex-col">
        <div className=" sticky top-4 flex justify-end ">
          <button
            className=" flex justify-end p-1 w-fit bg-white dark:bg-black bg-opacity-90 rounded-md"
            onClick={() => setShowDetails(null)}
          >
            <CgClose size={25} />
          </button>
        </div>
        <hr />

        <div className=" flex w-full justify-center gap-10 mt-2 sm:flex-row flex-col">
          <img
            className=" shadow-lg rounded-lg"
            src={book.imageLink}
            alt={book.link}
          />
          <div className=" flex flex-col">
            <div className="flex-1 p-4">
              <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2 tracking-widest">
                {book.title}
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-300 mb-2">
                By{' '}
                <span className=" text-gray-700 dark:text-gray-200 ">
                  {book.author}
                </span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-200 mb-2 mt-5">
                Language : {book.language}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-200 mb-2">
                Country : {book.country}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                Year : {book.year}
              </p>
            </div>
            <div className=" flex justify-end ml-10">
              <a
                target="_blank"
                href={book.link}
                className=" group w-fit flex items-center gap-2 rounded-full border border-black dark:border-white dark:text-white p-2 px-4
								hover:bg-gray-100 hover:dark:bg-gray-900"
              >
                <p>READ MORE</p>
                <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
