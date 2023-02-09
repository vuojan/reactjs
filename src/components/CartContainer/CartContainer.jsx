import { useContext } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../../storage/cartContext"
import ButtonCard from "../Button/ButtonCard"
import "./cartcontainer.css"

function CartContainer(){
    const {cart,removeItem,clearCart,getSubTotalPrice,getTotalPriceInCart} = useContext(cartContext)

    if(cart.length === 0)
    return (
        <div className="emptyCart"> 
            <h1>El carrito se encuentra vacio 😿</h1>
            <Link to= "/">
            <ButtonCard text= "Volver a la tienda"/>
            </Link>
        </div>
    )

    return(
        <div className="mainDivCenter">
            <h1 className="tittleCart">Carro de compras</h1>
                <table id="customers" className="tableMargin">
                    <thead>
                        <tr>
                        <th className="thWidth__tittle">Producto</th>
                        <th className="thWidth__img">Imagen</th>
                        <th className="thWidth">Precio</th>
                        <th className="thWidth">Cantidad</th>
                        <th className="thWidth">SubTotal</th>
                        </tr>
                    </thead>
                
            {cart.map((item) => (
                    
                        <tbody key={item.id}>
                            <tr>
                            <td className="tdWidth__tittle">
                                {item.tittle}
                            </td>
                            <td className="tdWidth__img">
                                <img src={item.imgurl} alt="" />
                            </td>
                            <td className="tdWidth"> 
                                {item.price}$
                            </td>
                            <td className="tdWidth">
                                {item.conteo}
                            </td>
                            <td className="tdWidth">
                                {getSubTotalPrice(item.price,item.conteo)}
                            </td> 
                            <td className="tdWidth">
                                <button className="buttonX" onClick={()=> removeItem (item.id)}>X</button>
                            </td>
                            </tr>
                        </tbody>        
            ))}
            </table>
            <div className="totalPrice">Precio total: <span className="totalPrice--color">{getTotalPriceInCart()}$</span></div>
            <div className>
                <button className="buttonFunctions">Finalizar compra</button>
                <button className="buttonFunctions" onClick={clearCart}>Vaciar carro</button>
            </div>
        </div>
        
    )
}

export default CartContainer