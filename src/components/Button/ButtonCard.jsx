import "./buttoncard.css"

function ButtonCard (props){
    
    return(
        <button className="buttonCard">{props.text}</button>
    )
}

export default ButtonCard;