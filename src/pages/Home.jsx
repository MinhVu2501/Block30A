import { useState, useEffect } from "react";
import { fetchBooks } from "../api.js"
import BookList from "../components/BookList.jsx";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await fetchBooks(); 
        setBooks(data);
      } catch (error) {
        console.error("Error loading books:", error);
      }
    };

    loadBooks();
  }, []); 

  return (
    <div>
      <h1>Book Catalog</h1>
      <BookList books={books} />
    </div>
  );
};

export default Home;
