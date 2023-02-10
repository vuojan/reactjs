import { useState } from "react"
import "./cartform.css"


function InputForm(props){
    return(
    <div className="mb-3">
        <label id="label" className="form-label">{props.label}</label>
        <input value= {props.value} onChange={props.onInputChange} name= {props.name} type="text" className="form-control" id="formGroupExampleInput"/>
    </div>
    )
}

function CartForm(props){

    const [userData,setUserData] = useState(
        {
            name: "",
            email: "",
            phone: "",
        }
    ) 

    console.log("state",userData)

    function onInputChange(evt){

        const field = evt.target.name;
       
        const value = evt.target.value
        console.log (value)

        const newSate= {...userData}
        newSate[field] = value;
        setUserData(newSate)
        }
    
    function clearData(){
        setUserData(
            {
                name: "",
                email: "",
                phone: "",
            }
        )
    }

    function onSubmit(evt){
        evt.preventDefault();
        props.onSubmit(userData);

    }

    let arrayUserData = Object.keys(userData)
    console.log(Object.keys(userData))

    return(
       <>
    <form onSubmit={onSubmit} className="formCard">
        <h2 className="formTittle">Ingresa tus datos para realizar la compra</h2>

        {arrayUserData.map( field => (
            <InputForm name={field} value={userData[field]} label={field} onInputChange={onInputChange} key={field} />
        ))}
        <div className="buttonsFlex">
            <button className="buttonFunctionsForm" onClick={clearData}>Limpiar datos</button>
            <button disabled={!(userData.name !== "" && userData.phone !== "" && userData.email !== "")}  type="submit"  className="buttonFunctionsForm">Proceder con la compra</button>
        </div>
    </form>
    </>     
    )
}

export default CartForm