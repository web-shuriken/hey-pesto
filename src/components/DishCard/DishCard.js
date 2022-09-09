import React from 'react'
import './DishCard.css';

export default function DishCard({item}) {

  console.log(`item with dishcard >`, item)

  return ( 
    <article class="dish-card">
      {item ?
      <>
        <img src={item.image} className="dish-card-img" alt={item.title} />
        <h3 className="dish-card-title">{item.title}</h3>
        <div className="dish-card-excerpt">
          {/* <p>{item.excerpt}</p> */}
        </div>
        <p className="dish-card-price"><span>{item.price}</span></p>
      </>
      : null }
    </article> 
  )
}
