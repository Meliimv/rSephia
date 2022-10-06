import React, { useEffect, useState } from 'react'
import { Products } from "./data/Products"
import ItemCard from "./ItemCard"


const ItemList = () => {

  useEffect(() => {
    getProducts().then(response => {
      console.log(response);
      setItems(response)
    })
  }, [])


  const getProducts = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Products)
      }, 3000);
    })
  }

  return (
    <>
    <div>Drinks</div>
    { ItemList.map( i => <ItemCard key={i.id} {...i}/> ) }
    </>
  )
}

  export default ItemList