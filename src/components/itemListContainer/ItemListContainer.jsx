import React, {useState,useEffect} from "react";
import getItems from "../../services/mockAsyncService";
import ItemList from "../ItemList/ItemList";

function ItemListContainer(){
    const [products,setProducts] = useState([]);

    console.log("renderizando");

    useEffect( ()=>{ 
        getItems().then((respuesta)=> {
            console.log(respuesta)
            setProducts(respuesta);
        });
    }, [])

    return (
        <>
            <ItemList products={products}/>
        </>  
    )
}


export default ItemListContainer;