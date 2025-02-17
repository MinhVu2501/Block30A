import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBookDetails } from "../api"; 

const BookDetails = () => {
  const { id } = useParams(); 
  const [book, setBook] = useState(null);

  useEffect(() => {
    const loadBookDetails = async () => {
      try {
        const data = await fetchBookDetails(id); 
        setBook(data);
      } catch (error) {
        console.error("Error loading book details:", error);
      }
    };

    loadBookDetails();
  }, [id]); 

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
    </div>
  );
};

export default BookDetails;
