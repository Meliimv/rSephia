import logo from './/logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Inicio from "./components/Inicio";
import ItemListContainer from "./components/ItemListContainer";
import Clicker from "./components/Clicker";
import ItemList from "./components/shop/ItemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/shop/ItemDetail";
import CocktailContainer from './components/Drinks/CocktailContainer';




function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ItemListContainer greeting="THE MOST DELICIOUS DRINKS" />
        <Inicio />
        <CocktailContainer/>
        <Routes>
          <Route path={"/"} element={<Clicker />} />
          <Route path={"/shop"} element={<ItemList />} />
          <Route path={"/shop/item/ :id"} element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;

