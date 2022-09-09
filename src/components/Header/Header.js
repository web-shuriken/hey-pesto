import React from "react";
import "./header.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header({ handleClick, open, setOpen }) {
  return (
    <header className="App-header">
      <p>
        <Link to="/">Hey Pesto</Link>
      </p>
      <FaShoppingCart size={30} />
    </header>
  );
}
