import ItemCount from "../itemCount/ItemCount";
import "./itemdetail.css"

function ItemDetail ({tittle, imgurl, detail, price, handleAddToCart}) {

    return(

        <>
            <h1 className="detailTittle">{tittle}</h1>
            <div className="detailFlex">
                <div>
                    <img className="detailImage" src={imgurl} alt="Aca hay una imagen" />
                </div>
                <div>
                    <h3 className="detailText">{detail}</h3>
                    <div className="detailPrice">$ {price}</div>
                    <ItemCount addToCart={handleAddToCart}/>
                </div>
            </div>
        </>  

    )

}

export default ItemDetail;