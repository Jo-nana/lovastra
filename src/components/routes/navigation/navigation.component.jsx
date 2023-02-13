import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import Button from '../../button/button.component.jsx';

import Sun from '../../../assets/images/sun.svg';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="nav-container">
          <div style={{position: "relative"}}>
            <Link className="navbar-brand" to="/">Lovastra</Link>
            <img src={Sun} alt="sun" style={{position: "absolute", top: "-339px", left: "-309px"}} />
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/horoscope">Horoscope</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/astraltheme">Astral Theme</Link>
              </li>
            </ul>
          </div>
          <Button id="small-primary" className="button-container ml-auto">Sign in</Button>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  )

}

export default Navigation;
