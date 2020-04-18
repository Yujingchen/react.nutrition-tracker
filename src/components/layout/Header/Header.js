import React from "react";
import styles from './Header.module.scss';
import classnames from "classnames"
import { ButtonPrimary } from "../../common/Button/Button"
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
  console.log("open")
  event.preventDefault();
  // event.stopPropagation();

  document.querySelector('.sidebar').classList.toggle('sidebar--open');
};

const Header = () => {
  return (
    <div className={styles['navbar']}>
      <nav className="navbar navbar-expand-sm bg-green" >
        <div className={classnames(styles['navbar__main'], "flex")}>
          <div className="navbar__main-left">
            <ButtonPrimary onClick={handleSidebarControlButton} icon="fas fa-bars">
            </ButtonPrimary>
            <span className="font-md white">Accounts</span>
          </div>
          <div className="navbar__main-right">
            <ul className={classnames(styles['navbar__list'], "flex")}>
              <NavItem iconName='far fa-clock' to='/' >
                <span className={classnames(styles['navbar__time'], "font-sm relative")}>23:54pm EEST</span>
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
