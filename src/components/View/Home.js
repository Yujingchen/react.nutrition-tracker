import React, { Component } from 'react';
import Section from "../progress/Section/Section"
import styles from "./Home.module.scss"
import Table from "../progress/Table/Table"
class Home extends Component {
    render() {
        return (
            <div className={styles["main"]}>
                <Section></Section>
                <Table></Table>
            </div>
        );
    }
}

export default Home;