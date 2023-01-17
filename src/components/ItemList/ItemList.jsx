import Item from "../item/Item";
import "./itemlist.css"

function ItemList(props) {
    return(
        <div className="itemMainDiv">
            <div className="itemsFlex">
                {props.products.map((item) => (
                    <Item
                        key={item.tittle}
                        id={item.id}
                        tittle={item.tittle}
                        imgurl={item.imgurl}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default ItemList;