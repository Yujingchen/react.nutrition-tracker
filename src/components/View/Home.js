import React, { Component } from 'react';
import Section from "../Progress/Section/Section"
import styles from "./Home.module.scss"
import Table from "../Progress/Table/Table"
class Home extends Component {
    render() {
        return (
            <div className={styles["mainContent"]}>
                <Section></Section>
                <Table></Table>
            </div>
        );
    }
}

export default Home;