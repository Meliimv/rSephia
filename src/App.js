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
        <Routes>
          <Route  path="/" element={<ItemListContainer greeting="THE MOST DELICIOUS DRINKS" />} />
          <Route  path="/" element={<Inicio />} />
          <Route  path="/components/Drinks" element={<CocktailContainer />} />
          <Route  path="/" element={<Clicker />} />
          <Route path="/components/shop" element={<ItemList />} />
          <Route path="/components/shop/item/ :id" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;

