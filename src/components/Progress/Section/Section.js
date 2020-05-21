import React from "react";
import styles from './Section.module.scss';
import Card from "./Card"
import PieChart from "../../chart/PieChart/PieChart"
export default function Section() {
    return (
        <div className={styles["section"]}>
            <Card sectionName="Crabs" iconName="analytics-outline" data="1500" iconColor="dark-blue" >
                <PieChart consume={1500} colors={["#CDDC39", "#673AB7",]} target={2000}>
                </PieChart>
            </Card>
            <Card sectionName="Protein" iconName="time-outline" data="130" iconColor="blue" >
                <PieChart consume={80} colors={["#F44336", "#00BCD4",]} target={150}>
                </PieChart>
            </Card>
            <Card sectionName="Fat" iconName="refresh-outline" data="30" iconColor="bright-blue">
                <PieChart consume={70} colors={["#607D8B", "#9B59B6",]} target={100}>
                </PieChart>
            </Card>
        </div >
    )
}