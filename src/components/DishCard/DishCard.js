import React from 'react'
import './DishCard.css';
import Pasta from '../../images/italian-dish.jpg'

export default function DishCard() {
  return (
    <article class="dish-card">
      <img src={Pasta} class="dish-card-img" alt="name of the dish" />
      <h3 class="dish-card-title">Dish name</h3>
      <div class="dish-card-excerpt">
        <p>A little something about the dish</p>
      </div>
      <p class="dish-card-price">£<span>9.99</span></p>
    </article>
  )
}
