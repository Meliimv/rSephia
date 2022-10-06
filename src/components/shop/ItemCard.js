import React from 'react'
import { Link } from "react-router-dom"

const ItemCard = ( {id, name, price} ) => {
    return (
        <Link to={"/shop/items/${id}"}>
            <div className="m-6">
                <div>{id}</div>
                <div>{name}</div>
                <div>{price}</div>
            </div>
        </Link>
    )
}
 
 
export default ItemCard