import React, { useEffect, useState } from 'react'
import { Products } from "./data/Products"
import ItemCard from "./ItemCard"


const ItemList = () => {

  const [Items, setItems] = useState([])

  useEffect(() => {
    getProducts().then(response => {
      console.log(response);
      setItems(response)
    })
  }, [])


  const getProducts = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve( Products )
      }, 3000);
    })
  }

  return (
    <>
    <div>Drinks</div>
    { Items.map( i => <ItemCard key={i.id} {...i}/> ) }
    </>
  )
}

  export default ItemList