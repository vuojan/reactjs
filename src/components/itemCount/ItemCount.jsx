import React from "react";
import { Link } from "react-router-dom";
import ButtonCard from "../Button/ButtonCard";
import "./itemCount.css";

function ItemCount(props){
    const[conteo,setConteo] = React.useState(1)

    function resta(){
        setConteo(conteo - 1)
    }
    function suma(){
        setConteo (conteo + 1)
    }

    return(
        <div className="flexCount">
            <div className="flexItemCount">
                <button className="buttonCount buttonCount__leftRadius" disabled={conteo <= 1}onClick={resta}>-</button>
                <span className="count">{conteo}</span>
                <button className="buttonCount buttonCount__rightRadius" disabled={conteo >= props.stock} onClick={suma}>+</button>
            </div>
                {props.stock !== 0?
                <button className="buttonAgregar"onClick={()=> props.addToCart(conteo)}>Agregar al Carrito</button>
            :
            <>
                <h2 className="noStock">No queda stock de este producto 😿</h2>
                <Link to= "/">
                <ButtonCard text= "Ver otros productos"/>
                </Link>
            </>
            }       
        </div>
    )
}

export default ItemCount;