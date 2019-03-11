import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light mb-3 py--0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="https://lh3.googleusercontent.com/3oSoo3ulm-3gZJb77cuJb66TwzdGrSfmQG8KqYuc6OxUPaKYUZEQkh3LT-FAlHfb"
            alt=""
            width="40"
            height="40"
            className="logo"
          />
          Simple Macro
        </a>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link" href="/">
                <i className="fas fa-home" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/entry/add">
                <i className="fas fa-plus" />
                ADD
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="far fa-calendar-check" /> STATS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
