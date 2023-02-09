import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import "./cartwidget.css"



function CartWidget(){

    const {getTotalItems,cart}= useContext(cartContext)

    return(
    <div className="flexCart">
        <Link to= "/cart">
        <img className="cart" src="/assets/imagenes/compra.png" alt="Carrito de compra" />
        </Link> 
        {cart.length > 0 && (
        <span className="cartNumber">{getTotalItems()}</span>
        )
        }
    </div>
    )
}

export default CartWidget;