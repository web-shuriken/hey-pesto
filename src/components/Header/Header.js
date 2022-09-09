import React from "react";
import "./header.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="App-header">
      <p>Hey Pesto</p>
      <FaShoppingCart size={30} />
    </header>
  );
}
