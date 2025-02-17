import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const Navbar = ({ isAuthenticated, onLogout }) => {
  const { cartItems } = useCart(); 

  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "#fff" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "20px", margin: 0 }}>
        <li>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/books" style={{ color: "#fff", textDecoration: "none" }}>
            Books
          </Link>
        </li>
        <li>
          <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>
            Cart ({cartItems.length})
          </Link>
        </li>
        {isAuthenticated ? (
          <li>
            <button onClick={onLogout} style={{ color: "#fff", background: "transparent", border: "none" }}>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" style={{ color: "#fff", textDecoration: "none" }}>
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
