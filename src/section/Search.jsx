import React, { useEffect, useState } from 'react';
import { BiBook, BiSearch } from 'react-icons/bi';
import backendAPI from '../services/apiRequest';
import { toast } from 'react-toastify';
import AddBook from './AddBook';
import { CgClose } from 'react-icons/cg';
import { HiPlus } from 'react-icons/hi2';

const searchType = [
  { label: 'Title', name: 'title', desc: "Search based on book's titles" },
  { label: 'Author', name: 'author', desc: "Search based on book's author" },
];

const Search = ({ setBooks }) => {
  const [searchField, setSearchField] = useState('');
  const [showAddBook, setShowAddBook] = useState(false);

  const handleInputChange = (e) => {
    const filteredInput = e.target.value.replace(/[^a-zA-Z0-9\s]/g, '');
    if (e.target.value !== filteredInput) {
      console.log('Special Character Not Allowed');
    }
    setSearchField(filteredInput);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (searchField.length < 2) {
      toast('Minimum 2 Characters is Required to Perform search');
      return 0;
    }
    try {
      const response = await backendAPI.get(`/books/title/${searchField}`);
      setBooks(response.data);
    } catch (error) {
      const errorMsg = error.response.data.message;
      if (errorMsg) {
        toast(errorMsg);
      } else {
        console.error('Unexpected error occurred:', error);
        toast('Unexpected error occurred:');
      }
    }
  };

  useEffect(() => {
    if (showAddBook) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showAddBook]);

  const onClose = () => {
    setShowAddBook(false);
  }

  return (<>
    {showAddBook &&
      <div className=' fixed overflow-y-auto p-10 z-10 top-0 left-0 h-screen w-full bg-white dark:bg-black dark:bg-opacity-40 bg-opacity-70 backdrop-blur-md'>
        <div className=' relative text-black dark:text-white flex justify-center border-b mb-4 items-center pb-2'>
          <h1 className=' pl-2 '>Add New Book</h1>
          <button onClick={() => setShowAddBook(false)} className=' absolute right-0 p-2 '>
            <CgClose size={25} />
          </button>
        </div>
        
        <AddBook onClose={onClose} />
      </div>
    }
    <div className=" dark:text-white my-10">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col max-w-sm w-1/2 mx-auto"
      >
        <div className="flex items-center">
          <div className="relative w-full">
            <div className="absolute opacity-40 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <BiBook />
            </div>
            <input
              onInput={handleInputChange}
              type="text"
              id="bookSearch"
              value={searchField}
              className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search using Book's Title"
              autoFocus
              required
            />
          </div>
          <button
            type="submit"
            className="p-2 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-2 "
          >
            <BiSearch size={22} />
            <span className="md:not-sr-only sr-only">Search</span>
          </button>
        </div>

      </form>
      <div className=' flex justify-center'>
        <button onClick={() => setShowAddBook(!showAddBook)} className="mt-4 flex items-center gap-2 w-fit pl-3 p-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400">
          <HiPlus size={22}/>
          <span className="text-sm text-gray-100">Add a Book</span>
        </button>
      </div>
    </div>
  </>
  );
};

export default Search;
