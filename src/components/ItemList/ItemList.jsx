import Item from "../item/Item";
import "./itemlist.css"

function ItemList(props) {
    return(
        <div className="itemsFlex">
            {props.products.map((item) => (
                <Item
                    key={item.tittle}
                    tittle={item.tittle}
                    imgurl={item.imgurl}
                    price={item.price}
                />
            ))}
        </div>
    );
}

export default ItemList;