import React from "react";
import styles from './Section.module.scss';
import Card from "./Card"
import PieChart from "../../chart/PieChart/PieChart"
export default function Section({ dietsData }) {
    if (dietsData) {
        const { complete, plan } = dietsData
        console.log(dietsData)
        return (
            <div className={styles["section"]}>
                <Card sectionName="Carbs" iconName="analytics-outline" data={complete.calories} iconColor="dark-blue" >
                    <PieChart consume={complete.calories} colors={["#5463c0", "#673AB7",]} target={plan.calories}>
                    </PieChart>
                </Card>
                <Card sectionName="Protein" iconName="time-outline" data={complete.protein} iconColor="blue" >
                    <PieChart consume={complete.protein} colors={["#673AB7", "#00BCD4",]} target={plan.protein}>
                    </PieChart>
                </Card>
                <Card sectionName="Fat" iconName="refresh-outline" data={complete.fat} iconColor="bright-blue">
                    <PieChart consume={complete.fat} colors={["#2ac8ae", "#3fa4d2",]} target={plan.fat}>
                    </PieChart>
                </Card>
            </div >
        )
    }
    return (
        <div className={styles["section"]}>
            <Card loading={true} >
            </Card>
            <Card loading={true} >
            </Card>
            <Card loading={true}>
            </Card>
        </div >
    )
}