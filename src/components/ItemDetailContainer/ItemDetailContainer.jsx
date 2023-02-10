import React, {useState,useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { getISingletem } from "../../services/firebase";
import { cartContext } from "../../storage/cartContext";
import ButtonCard from "../Button/ButtonCard";
import ItemCount from "../itemCount/ItemCount";
import ItemDetail from "../itemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import "./itemdetailcontainer.css"
import Swal from "sweetalert2";

function ItemDetailContainer(){
    const [product,setProduct] = useState([]);
    const [isLoading,setIsLoading] = useState (true);
    const [isInCart,SetIsInCart] = useState(false);

    let {itemid} = useParams()

    let {addItem,cart} = useContext(cartContext)

    const itemInCart= cart.find((item)=> item.id === product.id)
    let stockUpdated;
    if(itemInCart)
    stockUpdated = product.stock - itemInCart.conteo;
    else
    stockUpdated=product.stock


    function handleAddToCart(conteo){
        SetIsInCart(true)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Agregaste ${conteo} ${product.tittle} al carrito`,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          })
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
                        <ItemCount stock={stockUpdated} addToCart={handleAddToCart}/>
                    }
                </div>
            </div>
        </>  
    )
}


export default ItemDetailContainer;