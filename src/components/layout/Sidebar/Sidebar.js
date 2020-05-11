import React from "react";
import styles from './Sidebar.scss';
import classnames from "classnames"
// import { ButtonPrimary } from "../../common/Button/Button"

const SideBarItem = (
    {
        iconName,
        to,
        children,
        disabled
    }) => {
    let inactiveClasses = disabled ? "sidebar__link-inactive" : ""
    if (iconName != undefined) {
        return (
            <li className="sidebar__listItem">
                <a href={to} tabIndex="0" className={classnames(styles["sidebar__link"])}>
                    <ion-icon name={iconName} className={styles["sidebar__listItem__icon"], styles[inactiveClasses]}></ion-icon>
                    <span className={classnames(styles['sidebar__listItem_content'], "font-sm")}>
                        {children}
                    </span>
                </a>
            </li >
        )
    }
}

function Sidebar() {
    return (
        <div className="sidebar bg-green">
            <nav className="sidebar__nav center">
                <a className="sidebar__site-name" href="/">DNT v2</a>
            </nav>
            <div className="sidebar__main flex">
                <div className="sidebar__dashbord">
                    <ul className="sidebar__navList flex">
                        <SideBarItem iconName='far fa-clock' to='/'>Dashboard</SideBarItem>
                        <SideBarItem iconName='far fa-bell' to='/' >Search</SideBarItem>
                        <SideBarItem iconName='far fa-user-circle' to='/' >Ingrediant</SideBarItem>
                        <SideBarItem iconName='fa fa-sign-out-alt' to='/' >Settings</SideBarItem>
                    </ul>
                </div>
            </div>
        </ div >
    )
}


export default Sidebar