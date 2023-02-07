import { Link } from "react-router-dom";
import ButtonCard from "../Button/ButtonCard";
import "./item.css"


function Item ({id, tittle, imgurl, price}){
    
    const urlDetail = "/item/" + id

    return(
        <div className="itemCard">
            <h2 className="itemTittle">{tittle}</h2>
            <img className="itemImg" src={imgurl} alt="" />
            <h4 className="itemPrice">$ {price}</h4> 
            <Link to={urlDetail}>
                <ButtonCard text = "Ver Detalle"/>
            </Link>
        </div>
    )
}

export default Item;