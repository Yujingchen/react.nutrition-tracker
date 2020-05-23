import React from "react";
import styles from './Section2.module.scss';
import classnames from "classnames"
import LineChart from "../../chart/LineChart/LineChart"
import DataForm from "../dataform/DataForm"
import PieChart from "../../chart/PieChart/PieChart"
function Section3() {
    return (
        <div className={classnames(styles["section3"])}>
            <DataForm title="Realtime Statistics" modalIndex="3">
                <div className={classnames(styles["form__content"])}>
                    <div className="flex">
                        <div className={classnames(styles["graph-container"])}>
                            <PieChart consume={70} colors={["#2ac8ae", "#3fa4d2",]} target={100}>
                            </PieChart>
                        </div>
                    </div>
                </div>
            </DataForm >
        </div>
    )


}





export default Section3