import React from "react";
import styles from './Section.module.scss';
import classnames from "classnames"
import PieChart from "../../chart/PieChart/PieChart"
const CardItem = (
    {
        iconName,
        sectionName,
        data,
        iconColor
    }) => {
    if (iconName, sectionName, data != undefined) {
        return (
            <div className={classnames(styles["card"], "no-select  bg-green")}>
                <div className={classnames(styles["card__main"])} >
                    <div className={classnames(styles["card__icon"], iconColor)} >
                        <ion-icon size="large" name={iconName}></ion-icon>
                    </div>
                    <div className={classnames(styles["card__content"], "noselect")}>
                        <span className={classnames(styles["card__data"], "font-md extra-bold")}>
                            {data}
                        </span>
                        <span className={classnames(styles["card__name"], "font-sm extra-bold")}>
                            {sectionName}
                        </span>
                    </div>
                    <div className={classnames(styles["card__chart"])}>
                        <PieChart></PieChart>
                    </div>
                </div>
            </div >
        )
    }
    return null
}


export default function Section() {
    return (
        <div className={styles["section"]}>
            <CardItem sectionName="Crabs" iconName="analytics-outline" data="1500" iconColor="dark-blue" />
            <CardItem sectionName="Protein" iconName="time-outline" data="130" iconColor="blue" />
            <CardItem sectionName="Fat" iconName="refresh-outline" data="30" iconColor="bright-blue" />
        </div>
    )
}