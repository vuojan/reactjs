import ItemCount from "../itemCount/ItemCount";
import "./item.css"

function Item ({tittle, imgurl, price}){
    return(
        <div className="itemCard">
            <h2 className="itemTittle">{tittle}</h2>
            <img className="itemImg" src={imgurl} alt="" />
            <h4 className="itemPrice">$ {price}</h4> 
            <ItemCount/>
        </div>
    )
}

export default Item;