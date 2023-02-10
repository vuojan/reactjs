import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { getItemsByCategory, getItems } from "../../services/firebase";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

function ItemListContainer(){
    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState (true);

   let {categoryid}= useParams();

    useEffect( ()=>{ 

        if (categoryid) {
            getItemsByCategory(categoryid).then((respuesta)=>{
                setProducts(respuesta);
                setIsLoading(false)
            });
        } else {
            getItems().then((respuesta)=> {
                setProducts(respuesta);
                setIsLoading(false)
            });
        }
    }, [{categoryid}])

    return (
        <>
            {isLoading ? 
                <Loader/>
             : 
                <ItemList products={products}/>
            }
            
        </>  
    )
}


export default ItemListContainer;