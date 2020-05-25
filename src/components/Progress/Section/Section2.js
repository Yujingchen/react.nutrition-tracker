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
    if (data !== undefined) {
        const varietyStyle = (data) => {
            return data <= 0 ? "variety-green" : "variety-red"
        }
        return (
            <li className={classnames(styles["sideList__listItem"], "noselect")}>
                <div className="listItem__content">
                    <span className={classnames(styles["listItem__title"], "font-sm extra-bold")}>
                        {children}
                    </span>
                    <span className={classnames(styles["listItem__figures"], "font-md extra-bold")}>
                        {data}
                    </span>
                    <span className={classnames(styles["listItem__variety"], styles[varietyStyle(2000 - data)], "font-sm extra-bold")}>
                        {2000 - data >= 0 ? (data - 2000) / 20 : "+" + (data - 2000) / 20}%
                    </span>
                </div>
            </li >
        )
    }
}

function Table() {
    return (
        <div className={classnames(styles["section2"])}>
            <DataForm modalIndex="1" title="Calorious Consume Graph">
                <div className={classnames(styles["form__content"])}>
                    <div className={classnames(styles["sideList__container"])}>
                        <ul className={classnames(styles["sideList"], "flex-column")}>
                            <SideListItem data={1000}>Carlories</SideListItem>
                            <SideListItem data={1000}>Carlories</SideListItem>
                            <SideListItem data={2000}>Carlories</SideListItem>
                            <SideListItem data={1223}>Carlories</SideListItem>
                            <SideListItem data={2134}>Carlories</SideListItem>
                            <SideListItem data={2134}>Carlories</SideListItem>
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
export default Table