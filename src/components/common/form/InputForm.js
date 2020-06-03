import React, { useState } from 'react';
import "./InputForm.scss";

const Dashboard = (props) => {
    const [ingredient, setIngredient] = useState("")
    const [netWeight, setNetWeight] = useState("")

    const handelFormSubmit = (event) => {
        event.preventDefault()
    }

    const handleIngredientChange = (event) => {
        const value = event.target.value
        setIngredient(value)
    }
    const handleWeightChange = (event) => {
        const value = event.target.value
        setNetWeight(value)
    }

    window.addEventListener("click", function (event) {
        const modalEle = document.querySelector(".interface")
        const body = document.getElementsByTagName("body")[0]
        if (modalEle && event.target === modalEle) {
            modalEle.classList.toggle("interface-open")
            body.classList.toggle("modal-open")
        }
    })

    return (
        <div className={"interface"} >
            <form onSubmit={handelFormSubmit} className={"modal__form"}>
                <label htmlFor="ingredient">Ingredient</label>
                <input className="form__input" value={ingredient} onChange={handleIngredientChange} />
                <label htmlFor="netWeight">Net Weight</label>
                <input className="form__input" value={netWeight} onChange={handleWeightChange} />
                <input className="form__submitBtn" type="submit" value="Submit"></input>
            </form>
        </div >
    );
}

export default Dashboard