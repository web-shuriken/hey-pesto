import React from 'react'
import './DishCard.css';

export default function DishCard({dish}) {
  return (
    <article class="dish-card">
      <img src={dish.image} class="dish-card-img" alt={dish.name} />
      <h3 class="dish-card-title">{dish.name}</h3>
      <div class="dish-card-excerpt">
        <p>{dish.excerpt}</p>
      </div>
      <p class="dish-card-price">£<span>{dish.price}</span></p>
    </article>
  )
}
