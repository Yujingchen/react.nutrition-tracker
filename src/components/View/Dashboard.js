import React, { Component } from 'react';
import Section from "../Progress/Section/Section"
import styles from "./Dashboard.module.scss"
import Table from "../Progress/Table/Table"
class Dashboard extends Component {
    render() {
        return (
            <div className={styles["dashboard"]}>
                <Section></Section>
                <Table></Table>
            </div>
        );
    }
}

export default Dashboard;