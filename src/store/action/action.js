import { FETCH_DIETS } from "./actionTypes"
import firebase from "firebase/app"
import "firebase/database"

export const fetchDiets = () => async dispatch => {
    console.log("dispatch")
    firebase.database().ref("diets").once("value").then((snapshot) => {
        const diets = (snapshot.val())
        console.log(diets)
        const action = {
            type: FETCH_DIETS,
            response: diets
        }
        dispatch(action)
    }
    )

}
