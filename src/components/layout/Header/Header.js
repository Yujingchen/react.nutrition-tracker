import React from "react";
import styles from './Header.module.scss';
import classnames from "classnames"
const NavItem = (
  {
    iconName,
    content,
    to,
    children,
  }) => {
  return (
    <li className="nav-item ">
      <a href={to} tabIndex="0" className={classnames(styles["navbar__list-item"], "btn btn-sm-md light-white")}>
        <i className={`${iconName}`} /> {content}
        {children}
      </a>
    </li >
  )
}


const handleSidebarControlButton = event => {
  event.preventDefault();
  event.stopPropagation();

  document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
};

const Header = () => {
  return (
    <div className={styles['navbar']}>
      <nav className="navbar navbar-expand-sm bg-green" >
        <div className={classnames(styles['navbar__main'], "flex")}>
          <div className="navbar__main-left">
            <ul className={classnames(styles['navbar__list'], "flex")}>
              <NavItem iconName='fas fa-bars' to='/' >
                <span className={classnames(styles['navbar__time'], "small-font relative")}>Account</span>
              </NavItem>
            </ul>
            {/* <a className={styles["navbar__site-name"]} href="/">DNT v2</a> */}
          </div>
          <div className="navbar__main-right">
            <ul className={classnames(styles['navbar__list'], "flex")}>
              <NavItem iconName='far fa-clock' to='/' >
                <span className={classnames(styles['navbar__time'], "small-font relative")}>23:54pm EEST</span>
              </NavItem>
              <NavItem iconName='far fa-bell' to='/' />
              <NavItem iconName='far fa-user-circle' to='/' />
              <NavItem iconName='fa fa-sign-out-alt' to='/' />
            </ul>
          </div>
        </div>
      </nav>
    </div >
  );
};

export default Header;
