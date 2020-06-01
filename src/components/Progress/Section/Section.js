import React from "react";
import styles from './Section.module.scss';
import Card from "./Card"
import PieChart from "../../chart/PieChart/PieChart"
export default function Section({ data }) {
    if (data) {
        const { total, goal } = data
        return (
            <div className={styles["section"]}>
                <Card sectionName="Carbs" iconName="analytics-outline" data={total.calories} iconColor="dark-blue" >
                    <PieChart consume={total.calories} colors={["#5463c0", "#673AB7",]} target={goal.calories}>
                    </PieChart>
                </Card>
                <Card sectionName="Protein" iconName="time-outline" data={total.protein} iconColor="blue" >
                    <PieChart consume={total.protein} colors={["#673AB7", "#00BCD4",]} target={goal.protein}>
                    </PieChart>
                </Card>
                <Card sectionName="Fat" iconName="refresh-outline" data={total.fat} iconColor="bright-blue">
                    <PieChart consume={total.fat} colors={["#2ac8ae", "#3fa4d2",]} target={goal.fat}>
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