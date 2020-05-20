import React, { useState, useEffect, useRef } from "react";
import styles from './Header.module.scss';
import classnames from "classnames"
import { ButtonPrimary } from "../../common/button/Button"

const NavItem = (
  {
    iconName,
    to,
    children,
    disabled
  }) => {
  let disableClasses = disabled ? "navbar__link-disable" : ""
  if (iconName !== undefined) {
    return (
      <li className="navbar__listItem">
        <a href={to} tabIndex="0" className={classnames(styles["navbar__link"], styles[disableClasses])}>
          <i className={classnames(iconName, styles["navbar__listItem__icon"])} />
          <span className={classnames(styles['navbar__listItem__content'], "font-sm noselect")}>
            {children}
          </span>
        </a>
      </li >
    )
  }
  return (
    <li className="navbar__listItem">
      <a href={to} tabIndex="0" className={classnames(styles["navbar__link"], disableClasses)}>
        {children}
      </a>
    </li >
  )
}

function Header() {
  const [open, setOpen] = useState(false);
  let initialOpenState = useRef(false);
  useEffect(() => {
    if (initialOpenState.current) {
      initialOpenState.current = false;
      return
    }
    const sidebarEl = document.querySelector('.sidebar')
    if (sidebarEl !== undefined) {
      sidebarEl.classList.toggle('sidebar-open')
    }
  });

  const handleSidebarControl = event => {
    event.preventDefault();
    setOpen(!open)
  };


  return (
    <nav className={classnames(styles['navbar'], "bg-dark")}>
      <div className={classnames(styles['navbar__main'], "flex")}>
        <div className={classnames(styles["navbar__top"], "center")}>
          <a className={classnames(styles["navbar__logo"])} href="/">
            <span className={classnames(styles["navbar__logo__content"])}>DNT</span>
          </a>
        </div>
        <div className="navbar__toggle">
          <ButtonPrimary onClick={handleSidebarControl} icon="fas fa-bars">
          </ButtonPrimary>
          <span className="font-md white">Accounts</span>
        </div>
        <div className={classnames(styles["navbar__dashbord"])}>
          <ul className={classnames(styles['navbar__navList'], "flex")}>
            <NavItem iconName='far fa-clock' to='/' disabled={true}>
              13:42 EEST
              </NavItem>
            <NavItem iconName='far fa-bell' to='/' />
            <NavItem iconName='far fa-user-circle' to='/' />
            <NavItem iconName='fa fa-sign-out-alt' to='/' />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
