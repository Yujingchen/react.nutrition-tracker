import React from "react";
import styles from './Table.module.scss';
import classnames from "classnames"
import LineChart from "../../chart/LineChart/LineChart"
const SideListItem = (
    {
        data,
        children,
    }) => {
    if (data !== undefined) {
        return (
            <li className={classnames(styles["sideList__listItem"], "noselect")}>
                <div className="listItem__content">
                    <span className={classnames(styles["listItem__title"], "font-sm bold")}>
                        {children}
                    </span>
                    <span className={classnames(styles["listItem__figures"], "font-md extra-bold")}>
                        {data}
                    </span>
                    <span className={classnames(styles["listItem__variety"], "font-sm bold")}>
                        {2000 - data >= 0 ? 2500 - data : data - 2500}
                    </span>
                </div>
            </li >
        )
    }
}


function Table() {
    return (
        <div className={classnames(styles["card"], "no-select  bg-green")}>
            <div className={classnames(styles["card__container"])} >
                <table className={styles["table"]}>
                    <tr>
                        <th colspan="2"  >
                            <div className={classnames(styles["table__head"])}>
                                <span className={classnames(styles["table__title"])}>Carlories Consume Graph</span>
                                <span className={classnames(styles["table__icon"])}>
                                    <a href="/" tabIndex="0" className={styles["table__option"]} >
                                        <ion-icon size="small" name={"ellipsis-horizontal"}></ion-icon>
                                    </a>
                                </span>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={styles["table__colmn"]} rowSpan="6">
                            <ul className={classnames(styles["sideList"], "flex-column")}>
                                <SideListItem data={1000}>Carlories</SideListItem>
                                <SideListItem data={1000}>Carlories</SideListItem>
                                <SideListItem data={2000}>Carlories</SideListItem>
                                <SideListItem data={1223}> Carlories</SideListItem>
                                <SideListItem data={2134}>Carlories</SideListItem>
                                <SideListItem data={2134}>Carlories</SideListItem>
                            </ul>
                        </td>
                        <td rowspan="6">
                            <div className={classnames(styles["tb__main"])}>
                                <div className={classnames(styles["graph-container"])}>
                                    <LineChart></LineChart>
                                </div>
                            </div>
                        </td>

                    </tr>
                </table>
            </div>
        </div >




    )


}





export default Table