import React, { Component } from 'react';
// import ProgressBar from "../ProgressBar/ProgressBar"
import Section from "../Progress/Section/Section"
import styles from "./Home.module.scss"
class Home extends Component {
    render() {
        const entries = [{
            carb: 100,
            fat: 100,
            protein: 100,
            servings: 3
        }]
        const goal = {
            carb: 500,
            fat: 800,
            protein: 1000
        }
        return (
            <div className={styles["main"]}>
                <Section></Section>
            </div>
        );
    }
}

export default Home;