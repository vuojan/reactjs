
import './App.css';

import NavBar from "./components/navBar/NavBar";
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './storage/cartContext';


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
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
