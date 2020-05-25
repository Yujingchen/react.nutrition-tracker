import React, { Component } from 'react';
import Section from "../Progress/Section/Section";
import styles from "./Dashboard.module.scss";
import Section2 from "../Progress/Section/Section2";
import Section3 from "../Progress/Section/Section3";
import Section4 from "../Progress/Section/Section4";
class Dashboard extends Component {
    render() {
        return (
            <div className={styles["dashboard"]}>
                <Section></Section>
                <Section2></Section2>
                <div className={styles["dashboard-grid"]}>
                    <Section3></Section3>
                    <Section4></Section4>
                </div>
            </div>
        );
    }
}

export default Dashboard;