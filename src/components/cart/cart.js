import "./cart.css";
import { FaWindowClose, FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function Cart({ handleClick, open }) {
  return (
    <div className={open ? "cart-overlay transparentBcg" : "cart-overlay"}>
      <div className={open ? "cart showCart" : "cart"}>
        <span className="close-cart">
          <FaWindowClose onClick={handleClick} />
        </span>
        <h2>your cart</h2>
        <div className="cart-content">
          <div className="cart-item">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?resize=960,872?quality=90&resize=556,505"
              alt="product"
            />
            <div>
              <h4>Pasta 1</h4>
              <h5>£10</h5>
              <span className="remove-item">remove</span>
            </div>
            <div>
              <FaArrowUp />
              <p className="item-amount">1</p>
              <FaArrowDown />
            </div>
          </div>
        </div>
        <div className="cart-footer">
          <h3>
            your total : $<span className="cart-total">£10</span>
          </h3>
          <button className="clear-cart banner-btn">clear cart</button>
        </div>
      </div>
    </div>
  );
}
