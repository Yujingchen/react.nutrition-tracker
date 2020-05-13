import React from "react";
import styles from './Section.module.scss';
import classnames from "classnames"
import Card from "./Card"

export default function Section() {
    return (
        <div className={styles["section"]}>
            <Card sectionName="Crabs" iconName="analytics-outline" data="1500" iconColor="dark-blue" />
            <Card sectionName="Protein" iconName="time-outline" data="130" iconColor="blue" />
            <Card sectionName="Fat" iconName="refresh-outline" data="30" iconColor="bright-blue" />
        </div>
    )
}