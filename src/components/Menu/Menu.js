import React from 'react'
import './Menu.css';
import DishCard from '../DishCard/DishCard'
import Pasta from '../../images/italian-dish.jpg'

export default function Menu() {
  // dummy object to test the dish card component
  const menuItems = [
    {
      name: 'Italian Pasta',
      price: '9.99',
      excerpt: 'A little something about the dish',
      image: Pasta
    },
    {
      name: 'Pesto Pasta',
      price: '7.68',
      excerpt: 'Delicious pesto yummy',
      image: Pasta
    }
  ]

  return (
    <section class="menu">
      <h1>Menu</h1>
      <p>Food cards go here</p>
      <div class="menu-list">
        {
          menuItems.map((dish, key) => <DishCard dish={dish}/>)
        }
      </div>
    </section>
  )
}
