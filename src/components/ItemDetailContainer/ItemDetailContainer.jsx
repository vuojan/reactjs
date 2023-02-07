import React, {useState,useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { getISingletem } from "../../services/mockAsyncService";
import { cartContext } from "../../storage/cartContext";
import ItemDetail from "../itemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import "./itemdetailcontainer.css"

function ItemDetailContainer(){
    const [product,setProduct] = useState([]);
    const [isLoading,setIsLoading] = useState (true);

    let {itemid} = useParams()

    let {addItem, clearCart, removeItem} = useContext(cartContext)

    function handleAddToCart(conteo){

        alert(`Agregaste ${conteo} ${product.tittle} al carrito`)
        addItem(product,conteo)
        
    }

    useEffect( ()=>{ 
        getISingletem(itemid)
        .then((respuesta)=> {
            setProduct(respuesta);
            setIsLoading(false)
        })
        .catch ((error)=> {
            alert(`Error: ${error}`)
            setIsLoading(false)
        });
    }, []);

    if(isLoading)
    return <Loader/>

    return (
        <>
            <div className= "mainDiv">
                <div className="detailCard">
                    <ItemDetail
                        tittle={product.tittle}
                        imgurl={product.imgurl}
                        detail={product.detail}
                        price={product.price}
                        handleAddToCart={handleAddToCart}
                    />
                <button onClick={clearCart}>Vaciar carro</button>
                <button onClick={()=> removeItem (product.id)}>Eliminar item</button>
                </div>
            </div>
        </>  
    )
}


export default ItemDetailContainer;