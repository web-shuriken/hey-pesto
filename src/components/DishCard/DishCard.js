import React from 'react'
import './DishCard.css';

import {useState} from "react";

import Modal from "../Modal/Modal.js";

export default function DishCard({item}) {

  const [modal, setModal] = useState(false);

  console.log(`item with dishcard >`, item)

  return ( 
    <article className="dish-card" onClick={()=>setModal(!modal)}>
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
      {modal && <Modal array={item.ingredients} setModal={setModal} />}
    </article> 
  )
}
