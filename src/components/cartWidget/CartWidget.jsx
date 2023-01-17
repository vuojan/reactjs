import "./cartwidget.css"

function CartWidget(){
    return(
    <div className="flexCart">
        <img className="cart" src="/assets/imagenes/compra.png" alt="Carrito de compra" />
        <span className="cartNumber">5</span>
    </div>
    )
}

export default CartWidget;