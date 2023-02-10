
import './App.css';

import NavBar from "./components/navBar/NavBar";
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './storage/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
import { exportDataWithBatch } from './services/firebase';



function App() {
  
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= "/" element={<ItemListContainer/>}/>
          <Route path= "/category/:categoryid" element={<ItemListContainer/>}/>
          <Route path= "/item/:itemid" element={<ItemDetailContainer/>}/>
          <Route path= "/cart" element= {<CartContainer/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
