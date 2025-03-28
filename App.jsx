import "./styles/App.css";
import NavBar from "./components/NavBar";
import Search from "./section/Search";
import BookCard from "./components/BookCard";
import { useEffect, useState } from "react";
import backendAPI from "./services/apiRequest";
import { ToastContainer, toast } from "react-toastify";
import Pagination from "./components/Pagination";
import QuantitySelector from "./components/QuantitySelector";

function App() {
  const [books, setBooks] = useState(null);
  const [quantity, setQuantity] = useState(10);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const getBooks = async (q, p) => {
    setLoading(true)
    try {
      const response = await backendAPI.get(`/books/${q}/${p}`);
      setBooks(response.data);
    } catch (error) {
      const errorMsg = error.response.data.message;
      if (errorMsg) {
        toast(errorMsg);
      } else {
        console.error("Unexpected error occurred:", error);
        toast("Unexpected error occurred:");
      }
    } finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    getBooks(quantity, page);
  }, [quantity, page]);

  const handleBookQuantity = (e) => {
    setPage(1);
    setQuantity(e.target.value);
  };

  const handlePageChange = (e, pageNumber) => {
    if (page === pageNumber) {
      toast("Already Rendered");
      return 0;
    }
    setPage(pageNumber);
    window.scrollTo({ top: 220 });
  };

  return (
    <div id="parentDiv" className=" container mx-auto">
      <ToastContainer position="top-right" autoClose={3000} />
      <NavBar />
      <Search setBooks={setBooks} setLoading={setLoading}/>
      <div>
        <QuantitySelector
          books={books}
          quantity={quantity}
          page={page}
          getBooks={getBooks}
          handleBookQuantity={handleBookQuantity}
        />

        {books && <BookCard books={books} loading={loading} />}

        {!books?.string && (
          <Pagination
            books={books}
            page={page}
            handlePageChange={handlePageChange}
          />
        )}
      </div>
      {/* show newlily added book, when addition done successfully */}
    </div>
  );
}

export default App;
