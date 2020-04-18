import React from "react";
import styles from './Sidebar.scss';
import classnames from "classnames"
// import { ButtonPrimary } from "../../common/button/Button"


const Sidebar = (props) => {
    return (
        <div className={props.classes}>
            <nav className="sidebar__nav center">
                <a className="sidebar__site-name" href="/">DNT v2</a>
            </nav>
            <ul>
                <li>Dashboard</li>
                <li>Search</li>
                <li>Ingrediant</li>
                <li>Settings</li>
            </ul>
        </div >
    )
}


export default Sidebar