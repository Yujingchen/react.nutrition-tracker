import React, { useEffect } from 'react';
import styles from "./Dashboard.module.scss";
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
    const lastSixDays = props.recentDiets.diets
    const now = props.recentDiets.diets[0]
    return (
        <div className={styles["dashboard"]}>
            <Section data={now}></Section>
            <Section2 data={lastSixDays}></Section2>
            <div className={styles["dashboard-grid"]}>
                <Section3></Section3>
                <Section4 data={now}></Section4>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    recentDiets: state.diets
})

const mapDispatchToProps = dispatch => ({
    fetchDiets: () => dispatch(fetchDiets())
})



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)