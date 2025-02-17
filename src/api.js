const API_BASE_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";


export const fetchBooks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/books`);
    if (!response.ok) throw new Error("Error fetching books");
    const data = await response.json();
    console.log("API Response:", data);
    return  data.books; 
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchBookDetails = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/books/${id}`);
    if (!response.ok) throw new Error("Error fetching book details");
    return await response.json(); 
  } catch (error) {
    console.error(error);
  }
};
