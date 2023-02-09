import React, {useState,useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { getISingletem } from "../../services/mockAsyncService";
import { cartContext } from "../../storage/cartContext";
import ButtonCard from "../Button/ButtonCard";
import ItemCount from "../itemCount/ItemCount";
import ItemDetail from "../itemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import "./itemdetailcontainer.css"

function ItemDetailContainer(){
    const [product,setProduct] = useState([]);
    const [isLoading,setIsLoading] = useState (true);
    const [isInCart,SetIsInCart] = useState(false);

    let {itemid} = useParams()

    let {addItem, clearCart, removeItem} = useContext(cartContext)

    function handleAddToCart(conteo){
        SetIsInCart(true)
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
                    />
                    {isInCart ?
                        
                        <Link to= "/cart">
                            <ButtonCard text="Ir al Carrito"/>
                        </Link>
                    :
                        <ItemCount addToCart={handleAddToCart}/>
                    }
                </div>
            </div>
        </>  
    )
}


export default ItemDetailContainer;