import React from 'react';

const QuantitySelector = ({
  books,
  quantity,
  page,
  getBooks,
  handleBookQuantity,
}) => {
  return (
    <div className="flex justify-end mr-4">
      {!books?.string ? (
        <div className='' >
          <select
            onChange={handleBookQuantity}
            value={quantity}
            className=" outline-none p-2 cursor-pointer bg-transparent dark:text-white "
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
      ) : (
        <button
          onClick={() => getBooks(quantity, page)}
          className=" text-md text-blue-800 underline "
        >
          View All
        </button>
      )}
    </div>
  );
};

export default QuantitySelector;
