import React from "react";
import styles from './Section2.module.scss';
import classnames from "classnames"
import DataForm from "../dataform/DataForm"
import ScatterChart from "../../chart/ScatterChart/ScatterChart"
function Section3() {
    return (
        <div className={classnames(styles["section3"])}>
            <DataForm title="Realtime Statistics" modalIndex="3">
                <div className={classnames(styles["form__content"])}>
                    <div className="flex">
                        <div className={classnames(styles["graph-container"])}>
                            <ScatterChart>
                            </ScatterChart>
                        </div>
                    </div>
                </div>
            </DataForm >
        </div>
    )


}





export default Section3