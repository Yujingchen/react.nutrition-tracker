import React from "react";
import styles from './header.module.scss';
import classnames from "classnames"
const NavItem = (
  {
    iconName,
    content,
    to
  }) => {
  return (
    <li className="nav-item ">
      <a tabindex="0" class={classnames(styles["navbar__main-right--icon"], "btn btn-sm-md")}>
        <i className={`${iconName}`} /> {content}
      </a>
    </li >
  )
}


const Header = () => {
  return (
    <div className={styles['navbar']}>
      <nav className={classnames("navbar navbar-expand-sm", styles["navbar--green-color"])} >
        <div className={classnames(styles['navbar__main'], "flex")}>
          <div className="navbar__main-left">
            <a className={styles["navbar__content--site-name"]} href="/">Food Macro</a>
          </div>
          <div className="navbar__main-right">
            <ul className={classnames(styles['navbar__main-right--list'], "flex")}>
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
