import React from "react";
import styles from './Section2.module.scss';
import classnames from "classnames"
import LineChart from "../../chart/LineChart/LineChart"
import DataForm from "../dataform/DataForm"
const SideListItem = (
    {
        data,
        children,
    }) => {
    if (data !== undefined && Object.keys(data).length !== 0) {
        // const variety = data.

        const { complete, plan } = data
        const carloriesComplete = complete.calories
        const caloriesPlan = plan.calories
        const difference = carloriesComplete - caloriesPlan
        const variety = difference >= 0 ? (difference * 100 / caloriesPlan) : (difference * 100 / caloriesPlan)
        const formateVariety = variety.toFixed(1)
        const varietyStyle = (difference) => {
            return difference >= 0 ? "variety-green" : "variety-red"
        }
        return (
            <li className={classnames(styles["sideList__listItem"], "noselect")}>
                <div className="listItem__content">
                    <span className={classnames(styles["listItem__title"], "font-sm extra-bold")}>
                        {children}
                    </span>
                    <span className={classnames(styles["listItem__figures"], "font-md extra-bold")}>
                        {carloriesComplete}
                    </span>
                    <span className={classnames(styles["listItem__variety"], styles[varietyStyle(difference)], "font-sm extra-bold")}>
                        {formateVariety}%
                    </span>
                </div>
            </li >
        )
    }
    return (
        <li className={classnames(styles["sideList__listItem"], "noselect")}>
            <div className="listItem__content">
            </div>
        </li >
    )
}


function Section2({ dietsData }) {

    if (dietsData) {
        const sideLists = (
            Object.keys(dietsData).map((key, index) => {
                return (
                    <SideListItem key={key} data={dietsData[key]}> {key}</SideListItem >
                )
            })
        )

        return (
            <div className={classnames(styles["section2"])}>
                <DataForm modalIndex="1" title="Calorious Consume Graph">
                    <div className={classnames(styles["form__content"])}>
                        <div className={classnames(styles["sideList__container"])}>
                            <ul className={classnames(styles["sideList"], "flex-reverse-column")}>
                                {sideLists}
                            </ul>
                        </div>
                        <div className="flex">
                            <div className={classnames(styles["graph-container"])}>
                                <LineChart></LineChart>
                            </div>
                        </div>
                    </div>
                </DataForm>
            </div>
        )
    }
    return null
}
export default Section2