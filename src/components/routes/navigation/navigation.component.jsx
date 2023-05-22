import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import { Fragment } from 'react';
import Button from '../../button/button.component.jsx';

import strings from '../../../string.js'

import Sun from '../../../assets/images/sun.svg';

import './navigation.styles.scss';

const Navigation = () => {
  const location = useLocation();

  // Check if the current location is the dashboard page
  const isDashboardPage = location.pathname === "/dashboard";

  //Handle strings
  const navigationSring = strings.navigation;

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="nav-container">
          <img src={Sun} alt="sun" className="navbar-image"/>
          <Link className="navbar-brand" to="/">{strings.general.lovastra}</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            {isDashboardPage ? (
                // Render the navigation options for the dashboard page
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/find-match"
                    >
                      {navigationSring.menuMatch}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/chatroom"
                    >
                      {navigationSring.menuChat}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/profile"
                    >
                      {navigationSring.menuProfile}
                    </NavLink>
                  </li>
                </>
              ) : (
                // Render the default navigation options
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/aboutus"
                    >
                      {navigationSring.menuAboutUs}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/horoscope"
                    >
                      {navigationSring.menuHoroscope}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/astraltheme"
                    >
                      {navigationSring.menuAstralTheme}
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Button id="small-primary" className="button-container ml-auto">{strings.general.loginButtonText}</Button>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
