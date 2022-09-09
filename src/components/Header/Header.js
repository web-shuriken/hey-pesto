import React from "react";
import "./header.css";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../cart/cart";

export default function Header({ handleClick, open, setOpen }) {
  return (
    <header className="App-header">
      <p>Hey Pesto</p>
      <FaShoppingCart size={30} onClick={handleClick} />
    </header>
  );
}
