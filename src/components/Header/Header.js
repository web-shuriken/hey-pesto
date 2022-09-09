import React from "react";
import "./header.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

<<<<<<< HEAD
import Cart from "../cart/cart";
=======
import { Link } from 'react-router-dom';
>>>>>>> b391d5005a6ac0f47f595550079df7946630c756

export default function Header({ handleClick, open, setOpen }) {
  return (
    <header className="App-header">
<<<<<<< HEAD
      <p>Hey Pesto</p>
      <FaShoppingCart size={30} onClick={handleClick} />
=======
      <p><Link to='/'>Hey Pesto</Link></p>
      <FaShoppingCart size={30} />
>>>>>>> b391d5005a6ac0f47f595550079df7946630c756
    </header>
  );
}
