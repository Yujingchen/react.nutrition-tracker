import React from "react";
import styles from './Section2.module.scss';
import classnames from "classnames"
import HorizontalChart from "../../chart/HorizontalChart/HorizontalChart"
import DataForm from "../dataform/DataForm"
function Section4() {
    return (
        <div className={classnames(styles["section4"])}>
            <DataForm title="Daily Chart" modalIndex="4">
                <div className={classnames(styles["form__content"])}>
                    <div className="flex">
                        <div className={classnames(styles["graph-container"])}>
                            <HorizontalChart colors={["#2ac8ae", "#00BCD4", "#5463c0",]}>
                            </HorizontalChart>
                        </div>
                    </div>
                </div>
            </DataForm >
        </div >
    )
}





export default Section4