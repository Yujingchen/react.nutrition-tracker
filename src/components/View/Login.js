import React, { useEffect } from 'react';
import styles from "./Dashboard.module.scss";
import { connect } from 'react-redux'
import { fetchDiets } from "../../store/action/action"

const Dashboard = (props) => {
    useEffect(() => {
        props.fetchDiets()
    }, [])
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