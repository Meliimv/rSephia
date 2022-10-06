import logo from './/logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Inicio from "./components/Inicio";
import ItemListContainer from "./components/ItemListContainer";
import Clicker from "./components/Clicker";
import ItemList from "./components/shop/ItemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/shop/ItemDetail";
import Products from "./components/shop/data/Products";



function App() {
  return (
    <>
    
      <NavBar />
      <ItemListContainer greeting="THE MOST DELICIOUS DRINKS" />
       <Inicio/>
       <BrowserRouter>
       <Routes>
        <Route path={"/"} element={<Clicker/>} />
        <Route path={"/shop"} element={<ItemList/>} />
        <Route path={"/shop/item/ :id"} element={<ItemDetail/>} />
       </Routes>
       </BrowserRouter>
       </>
         
  );
}

export default App;

