import React from "react";
import styles from './Card.module.scss';
import classnames from "classnames"
import PieChart from "../../chart/PieChart/PieChart"
function Card(
    { data,
        iconName,
        sectionName,
        iconColor,
        children
    }) {
    if (iconName | sectionName | data !== undefined) {
        return (
            <div className={classnames(styles["card"], "no-select  bg-green")}>
                <div className={classnames(styles["card__container"])} >
                    <div className={classnames(styles["card__icon"], iconColor)} >
                        <ion-icon size="large" name={iconName}></ion-icon>
                    </div>
                    <div className={classnames(styles["card__content"], "noselect")}>
                        <span className={classnames(styles["card__info"], "font-md extra-bold")}>
                            {data}
                        </span>
                        <span className={classnames(styles["card__name"], "bold")}>
                            {sectionName}
                        </span>
                    </div>
                    <div className={classnames(styles["card__chart"])}>
                        {children}
                    </div>
                </div>
            </div >
        )
    }
    return null
}

export default Card