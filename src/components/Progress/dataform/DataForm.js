import React from "react";
import styles from './DataForm.module.scss';
import classnames from "classnames"

function DataForm({ children, title, modalIndex }) {
    if (title && modalIndex) {
        const modalUniqueClass = `modal-${modalIndex}`
        const DropDown = () => {
            return (
                <div className={classnames(styles["modal__dropdown"], modalUniqueClass)}>
                    <div className={classnames(styles["dropdown"])}>
                        <ul className={classnames(styles["dropdown__list"])}>
                            <a className={classnames(styles["dropdown__link"])} href="google.com" onClick={handleDropDownClick}>
                                <li className={classnames(styles["dropdown__listItem"])}>Show open editor</li>
                            </a>
                            <a className={classnames(styles["dropdown__link"])} href="google.com" onClick={handleDropDownClick}>
                                <li className={classnames(styles["dropdown__listItem"])}>Close All</li>
                            </a>
                            <a className={classnames(styles["dropdown__link"])} href="google.com" onClick={handleDropDownClick}>
                                <li className={classnames(styles["dropdown__listItem"])}>Close saved</li>
                            </a>
                        </ul>
                    </div>
                </div >
            )
        }

        const handleDropDownClick = (e) => {
            e.preventDefault()
            console.log("Wish you best of luck!")
        }
        const toggleControllButton = (e) => {
            e.preventDefault();
            const modalEle = document.querySelector(`.${styles["modal__dropdown"]}.${modalUniqueClass}`)
            if (modalEle) {
                modalEle.classList.toggle(`${styles["modal__dropdown-open"]}`)
            }
        }
        window.addEventListener("click", function (event) {
            const modalEle = document.querySelector(`.${styles["modal__dropdown"]}.${modalUniqueClass}`)
            if (modalEle && event.target === modalEle) {
                modalEle.classList.toggle(`${styles["modal__dropdown-open"]}`)
            }
        }
        )
        return (
            <div className={classnames(styles["card"], "no-select boxShadow-dark darkblue")}>
                <div className={classnames(styles["card_sub"])} >
                    <div className={classnames(styles["card__head"])}>
                        <span className={classnames(styles["head__title"])}>{title}</span>
                        <span className={classnames(styles["head__icon"])}>
                            <a href="/" tabIndex="0" className={styles["head__option"]} onClick={(e) => toggleControllButton(e)}>
                                <ion-icon size="small" name={"ellipsis-horizontal"}></ion-icon>
                            </a>
                        </span>
                    </div>
                    {children}
                    <DropDown></DropDown>
                </div>
            </div >
        )
    }
    return null
}

export default DataForm