import React from 'react'

import {useEffect, useState} from "react";
import './Menu.css';
import DishCard from '../DishCard/DishCard'
// import Pasta from '../../images/italian-dish.jpg'




export default function Menu() {
  // dummy object to test the dish card component
  // const menuItems = [
  //   {
  //     name: 'Italian Pasta',
  //     price: '9.99',
  //     excerpt: 'A little something about the dish',
  //     image: Pasta
  //   },
  //   {
  //     name: 'Pesto Pasta',
  //     price: '7.68',
  //     excerpt: 'Delicious pesto yummy',
  //     image: Pasta
  //   }
  // ]

  

  const [data,setData] = useState();

  const url = `http://localhost:5000/menu`

  const getData = async ()=> {
    const response = await fetch(url)

    const data = await response.json();

    setData(data.payload)

    console.log(`data`, data.payload)
  }

useEffect(()=> {
    getData()
  }
, [])

  console.log(`data outside of useEffect >`, data)

  return (
    <section className="menu">
      <h1>Menu</h1>
      <p>Food cards go here</p>
      {data ? 
      <div className="menu-list">
        {
          data.map((item, index) => <DishCard item={item} key={index}/>)
        }       
      </div> 
      : null }

      
    </section>
  )
}
