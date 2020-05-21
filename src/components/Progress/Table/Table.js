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

const toggleTableControllButton = (e) => {
    const modalEle = document.querySelector(`.${styles["modal__dropdown"]}`)
    e.preventDefault();
    if (modalEle) {
        modalEle.classList.toggle(`${styles["modal__dropdown-open"]}`)
    }
}

window.onclick = function (event) {
    const modalEle = document.querySelector(`.${styles["modal__dropdown"]}`)
    if (modalEle && event.target === modalEle) {
        modalEle.classList.toggle(`${styles["modal__dropdown-open"]}`)
    }
}

const DropDown = () => {
    return (
        <div className={styles["modal__dropdown"]}>
            <div className={classnames(styles["dropdown"])}>
                <ul className={classnames(styles["dropdown__list"])}>
                    <li className={classnames(styles["dropdown__listItem"])}><a className={classnames(styles["dropdown__link"])} href="google.com">Show open editor</a></li>
                    <li className={classnames(styles["dropdown__listItem"])}><a className={classnames(styles["dropdown__link"])} href="google.com">Close All</a></li>
                    <li className={classnames(styles["dropdown__listItem"])}><a className={classnames(styles["dropdown__link"])} href="google.com">Close saved</a></li>
                </ul>
            </div>
        </div>
    )
}


function Table() {
    return (
        <div className={classnames(styles["card"], "no-select shadow darkblue")}>
            <div className={classnames(styles["card__container"])} >
                <table className={styles["table"]}>
                    <thead>
                        <tr>
                            <th colSpan="2"  >
                                <div className={classnames(styles["table__head"])}>
                                    <span className={classnames(styles["table__title"])}>Carlories Consume Graph</span>
                                    <span className={classnames(styles["table__icon"])}>
                                        <a href="/" tabIndex="0" className={styles["table__option"]} onClick={toggleTableControllButton}>
                                            <ion-icon size="small" name={"ellipsis-horizontal"}></ion-icon>
                                        </a>
                                    </span>
                                    <DropDown></DropDown>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
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
                            <td rowSpan="6">
                                <div className={classnames(styles["tb__main"])}>
                                    <div className={classnames(styles["graph-container"])}>
                                        <LineChart></LineChart>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >




    )


}





export default Table