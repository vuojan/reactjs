
import './App.css';

import NavBar from "./components/navBar/NavBar";
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path= "/" element={<ItemListContainer/>}/>
        <Route path= "/category/:categoryid" element={<ItemListContainer/>}/>
        <Route path= "/item/:itemid" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
