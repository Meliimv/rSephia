import { useEffect,useState } from 'react'

const Clicker = () => {
  const [counter, setCounter] = useState(0)

  useEffect( () => {
    console.log("estamos contando");
  }, [counter])
const clickHandler = () => {
console.log("Hiciste click");
setCounter (counter + 1 )
}


return (
    <div>
    <div className="btn-square">{counter} </div>
        <button onClick= {clickHandler } className="btn m-10 padding bottom-10"> CHOOSE YOUR ITEMS</button>
    </div>
)
    

}


export default Clicker