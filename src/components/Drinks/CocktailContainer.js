import React, { useEffect, useState } from 'react'

const CocktailContainer = () => {

    const [ people, setPeople] = useState([])
useEffect(() => {
    getPeople()
}, [])

const getPeople = () =>{
    const URL = "https://www.thecocktaildb.com/api.php/"
    fetch( URL )
    .then( response => {
        return response.json()
     })
     .then( data => {
        console.log( data.results );
        setPeople( data.results )
     }) 
}

  return (
    <div>
        <h1>CocktailContainer</h1>
        {getPeople.map( p=> <li key={p.URL}>{p.name }</li>) }
        </div>
  )
}

export default CocktailContainer