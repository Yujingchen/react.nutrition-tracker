import React, { useEffect } from 'react';
import Section from "../Progress/Section/Section";
import styles from "./Dashboard.module.scss";
import Section2 from "../Progress/Section/Section2";
import Section3 from "../Progress/Section/Section3";
import Section4 from "../Progress/Section/Section4";
import { connect } from 'react-redux'
import { fetchDiets } from "../../store/action/action"
import Loading from "./Loading"
const Dashboard = (props) => {
    useEffect(() => {
        props.fetchDiets()
    }, [])

    if (props.recentDiets && Object.keys(props.recentDiets).length !== 0) {
        // const today = new Date().toISOString().split('T')[0];
        const lastSixDays = props.recentDiets.diets
        const todaysData = props.recentDiets.diets["2020-06-01"]
        return (
            <div className={styles["dashboard"]}>
                {/* <button onClick={handelAddMeal}>Add meal</button>
                <InputForm></InputForm> */}
                <Section dietsData={todaysData}></Section>
                <Section2 dietsData={lastSixDays}></Section2>
                <div className={styles["dashboard-grid"]}>
                    <Section3></Section3>
                    <Section4 dietsData={todaysData}></Section4>
                </div>
            </div>
        );
    }
    return <Loading />
}
const mapStateToProps = (state) => ({
    recentDiets: state.diets
})
const mapDispatchToProps = dispatch => ({
    fetchDiets: () => dispatch(fetchDiets())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)