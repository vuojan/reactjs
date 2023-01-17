import React from "react";
import "./itemCount.css";

function ItemCount(){
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
                <button className="buttonCount buttonCount__rightRadius" disabled={conteo >= 99} onClick={suma}>+</button>
            </div>  
            <button className="buttonAgregar">Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;