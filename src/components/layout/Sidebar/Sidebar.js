import React, { useEffect } from "react";
import './Sidebar.scss';
// import { ButtonPrimary } from "../../common/Button/Button"

const SideBarItem = (
    {
        iconName,
        to,
        children,
        disabled,
        actived
    }) => {
    let disableClasses = disabled ? "sidebar__link-disable" : ""
    let activeClasses = actived ? "sidebar__link-active sidebar__link-disable" : ""
    if (iconName != undefined) {
        return (
            <li className="sidebar__listItem noselect">
                <a href={to} tabIndex="0" className={`sidebar__link ${disableClasses} ${activeClasses}`} >
                    <div className="sidebar__listItem__icon">
                        <ion-icon size="large" name={iconName}></ion-icon>
                    </div>
                    <span className="sidebar__listItem__content font-md">
                        {children}
                    </span>
                </a>
            </li >
        )
    }
}

const linkOnClick = (event, el) => {
    event.preventDefault();
    const activeEl = document.querySelector('.sidebar__link-active')
    if (activeEl && el) {
        activeEl.classList.remove("sidebar__link-active", "sidebar__link-disable");
        el.classList.add("sidebar__link-active", "sidebar__link-disable")
    }
};


function Sidebar() {
    useEffect(() => {
        const sidebarEls = document.querySelectorAll('.sidebar__link')
        if (sidebarEls) {
            for (const el of sidebarEls) {
                el.addEventListener("click", function (event) {
                    linkOnClick(event, el)
                }
                )
            }
        }
    })
    return (
        <div className="sidebar bg-green">
            <nav className="sidebar__nav center">
                <a className="sidebar__logo" href="/">DNT v2</a>
            </nav>
            <div className="sidebar__main ">
                <div className="sidebar__dashbord">
                    <ul className="sidebar__navList flex-column">
                        <SideBarItem iconName="analytics-outline" to='/' actived>Dashboard</SideBarItem>
                        <SideBarItem iconName="search-circle-outline" to='/' >Search</SideBarItem>
                        <SideBarItem iconName='pizza-outline' to='/' >Ingrediant</SideBarItem>
                        <SideBarItem iconName='settings-outline' to='/' >Settings</SideBarItem>
                    </ul>
                </div>
            </div>
        </ div >
    )
}


export default Sidebar