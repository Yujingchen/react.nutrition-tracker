import React, { useEffect } from 'react';
import Section from "../Progress/Section/Section";
import styles from "./Dashboard.module.scss";
import Section2 from "../Progress/Section/Section2";
import Section3 from "../Progress/Section/Section3";
import Section4 from "../Progress/Section/Section4";
import firebase from "firebase/app"
import "firebase/database"
import { connect } from 'react-redux'
import { fetchDiets } from "../../store/action/action"

const Dashboard = (props) => {
    useEffect(() => {
        props.fetchDiets()
        // firebase.database().ref("diets").once("value").then((snapshot) => {
        //     const diets = (snapshot.val())
        //     console.log(diets)
        //     setData(diets)
        // })
    }, [])
    console.log(props.diets.diets)
    return (
        <div className={styles["dashboard"]}>
            <Section data={props.diets.diets}></Section>
            <Section2></Section2>
            <div className={styles["dashboard-grid"]}>
                <Section3></Section3>
                <Section4></Section4>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    diets: state.diets
})

const mapDispatchToProps = dispatch => ({
    fetchDiets: () => dispatch(fetchDiets())
})



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)