import React from "react";
import styles from './Section.module.scss';
import classnames from "classnames"
import Card from "./Card"
import PieChart from "../../chart/PieChart/PieChart"
export default function Section() {
    return (
        <div className={styles["section"]}>
            <Card sectionName="Crabs" iconName="analytics-outline" data="1500" iconColor="dark-blue" >
                <PieChart data="data" colors={["#CDDC39", "#673AB7",]}>
                </PieChart>
            </Card>
            <Card sectionName="Protein" iconName="time-outline" data="130" iconColor="blue" >
                <PieChart data="data" colors={["#F44336", "#00BCD4",]}>
                </PieChart>
            </Card>
            <Card sectionName="Fat" iconName="refresh-outline" data="30" iconColor="bright-blue" >
                <PieChart data="data" colors={["#607D8B", "#9B59B6",]}>
                </PieChart>
            </Card>
        </div >
    )
}