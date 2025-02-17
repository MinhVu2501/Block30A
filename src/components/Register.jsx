import { useState } from "react";

const Register = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const handleRegisterClick = async () => {
    const baseUrl = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com';
    const uri = '/api/users/register';

    try {
      
      const response = await fetch(baseUrl + uri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setErrorMessage(data.message || "Registration failed. Please try again.");
        return;
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("Error registering. Please try again later.");
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegisterClick();
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>

      {/* Display error message if available */}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Register;
