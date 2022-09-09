import Header from "../Header/Header";
import * as React from "react";
import "./App.css";
import Cart from "../cart/cart";

import { Link } from "react-router-dom";

//remove testing only
import Menu from "../Menu/Menu.js";

function App() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <Header handleClick={handleClick} open={open} setOpen={setOpen} />
      {open && <Cart open={open} handleClick={handleClick} />}
      <div className="homepage-container">
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?resize=960,872?quality=90&resize=556,505"
          alt="home-picture"
        />
        <div className="home-text">
          <p>Hey l'ottimo cibo!</p>
          <button>
            <Link to="/menu">View Menu</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
