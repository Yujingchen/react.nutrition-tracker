import React from "react";
import styles from './Section2.module.scss';
import classnames from "classnames"
import PieChart from "../../chart/PieChart/PieChart"
import DataForm from "../dataform/DataForm"
function Section4() {
    return (
        <div className={classnames(styles["section4"])}>
            <DataForm title="Daily Chart" modalIndex="4">
                <div className={classnames(styles["form__content"])}>
                    <div className="flex">
                        <div className={classnames(styles["graph-container"])}>
                            <PieChart consume={70} colors={["#2ac8ae", "#3fa4d2",]} target={100}>
                            </PieChart>                        </div>
                    </div>
                </div>
            </DataForm >
        </div>
    )


}





export default Section4