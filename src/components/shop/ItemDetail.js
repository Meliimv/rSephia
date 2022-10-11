import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Products } from './data/Products'
import { useState } from "react"

const ItemDetail = () => {

    const { id: itemId } = useParams()
    const [Loading, setLoading] = useState(true)
    const [item, setItem] = useState({})

    useEffect(() => {
        getItemDetails().then(response => {
            setItem(response)
            setLoading(false)
        })
    })

    const getItemDetails = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Products.find(p => p.id === Number(itemId)))
            }, 5000);
        })
    }

    return (
        <>
            {Loading &&
                <div className="m-10">
                    <div>{item.name}</div>
                    <div>Price: {item.price}</div>
                </div>

            }
        </>
    )
}

export default ItemDetail