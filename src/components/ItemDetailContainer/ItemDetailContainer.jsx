import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { getISingletem } from "../../services/mockAsyncService";
import ItemCount from "../itemCount/ItemCount";
import "./itemdetailcontainer.css"

function ItemDetailContainer(){
    const [product,setProduct] = useState([]);

    let {itemid} = useParams()

    useEffect( ()=>{ 
        getISingletem(itemid)
        .then((respuesta)=> {
            setProduct(respuesta);
        })
        .catch ((error)=> alert(`Error: ${error}`));
    }, []);

    return (
        <>
        <div className="detailCard">
            <h1 className="detailTittle">{product.tittle}</h1>
            <div className="detailFlex">
                <div>
                    <img className="detailImage" src={product.imgurl} alt="Aca hay una imagen" />
                </div>
                <div>
                    <h3 className="detailText">{product.detail}</h3>
                    <div className="detailPrice">$ {product.price}</div>
                    <ItemCount/>
                </div>
            </div>
        </div>
        </>  
    )
}


export default ItemDetailContainer;