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
      <a href={to} tabIndex="0" className={classnames(styles["navbar__icon"], "btn btn-sm-md")}>
        <i className={`${iconName}`} /> {content}
        {children}
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
            <a className={styles["navbar__site-name"]} href="/">DNT v2</a>
          </div>
          <div className="navbar__main-right">
            <ul className={classnames(styles['navbar__list'], "flex")}>
              <NavItem iconName='far fa-clock' to='/' >
                <span className="small-font">23:54pm EEST</span>
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
