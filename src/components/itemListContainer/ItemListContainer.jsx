import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import getItems, { getItemsByCategory } from "../../services/mockAsyncService";
import ItemList from "../ItemList/ItemList";

function ItemListContainer(){
    const [products,setProducts] = useState([]);

   let {categoryid}= useParams();

    useEffect( ()=>{ 

        if (categoryid) {
            getItemsByCategory(categoryid).then((respuesta)=>{
                setProducts(respuesta);
            });
        } else {
            getItems().then((respuesta)=> {
                setProducts(respuesta);
            });
        }
    }, [{categoryid}])

    return (
        <>
            <ItemList products={products}/>
        </>  
    )
}


export default ItemListContainer;