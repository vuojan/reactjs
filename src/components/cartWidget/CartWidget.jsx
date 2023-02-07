import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import "./cartwidget.css"



function CartWidget(){

    const {getTotalItems}= useContext(cartContext)

    return(
    <div className="flexCart">
        <img className="cart" src="/assets/imagenes/compra.png" alt="Carrito de compra" />
        <span className="cartNumber">{getTotalItems()}</span>
    </div>
    )
}

export default CartWidget;