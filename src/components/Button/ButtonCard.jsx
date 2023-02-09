import "./buttoncard.css"

function ButtonCard (props){

    function handleClick(){
        props.onClick();
    }
    
    return(
        <button className="buttonCard" onClick={handleClick}>{props.text}</button>
    )
}

export default ButtonCard;