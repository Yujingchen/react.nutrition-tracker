import React, { Component } from 'react';
// import ProgressBar from "../ProgressBar/ProgressBar"
import Section from "../progress/Section/Section"
import styles from "./Home.module.scss"
import Table from "../progress/Table/Table"
class Home extends Component {
    render() {
        // const entries = [{
        //     carb: 100,
        //     fat: 100,
        //     protein: 100,
        //     servings: 3
        // }]
        // const goal = {
        //     carb: 500,
        //     fat: 800,
        //     protein: 1000
        // }
        return (
            <div className={styles["main"]}>
                <Section></Section>
                <Table></Table>
            </div>
        );
    }
}

export default Home;