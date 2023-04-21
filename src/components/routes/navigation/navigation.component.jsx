import { NavLink, Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import Button from '../../button/button.component.jsx';

import Sun from '../../../assets/images/sun.svg';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="nav-container">
          <img src={Sun} alt="sun" className="navbar-image"/>
          <Link className="navbar-brand" to="/">Lovastra</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/aboutus">About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/horoscope">Horoscope</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/astraltheme">Astral Theme</NavLink>
              </li>
            </ul>
          </div>
          <Button id="small-primary" className="button-container ml-auto">Sign in</Button>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
