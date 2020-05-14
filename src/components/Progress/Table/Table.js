import React from "react";
import styles from './Table.module.scss';
import classnames from "classnames"




function Table() {
    return (
        <div className={classnames(styles["card"], "no-select  bg-green")}>
            <div className={classnames(styles["card__container"])} >
                <div className={classnames(styles["table__head"])}>
                    <span className={classnames(styles["table__title"])}>Carlories Consume Graph</span>
                    <span className={classnames(styles["table__icon"])}>
                        <a href="/" tabIndex="0" className={styles["table__option"]} >
                            <ion-icon size="small" name={"ellipsis-horizontal"}></ion-icon>
                        </a>
                    </span>
                </div>
                <div className={classnames(styles["card__chart"])}>
                </div>
            </div>
        </div >
    )
}





export default Table