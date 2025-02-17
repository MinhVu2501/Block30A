import { useEffect, useState } from "react";
import { fetchBooks } from "../api"; 

const BookList = () => {
  const [books, setBooks] = useState([]); 

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await fetchBooks();
        setBooks(data); 
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    loadBooks();
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.length > 0 ? (
          books.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author}
            </li>
          ))
        ) : (
          <p>No books available</p>
        )}
      </ul>
    </div>
  );
};

export default BookList;
