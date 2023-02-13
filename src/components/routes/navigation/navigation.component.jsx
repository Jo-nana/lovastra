import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import Button from '../../button/button.component.jsx';

import './navigation.styles.scss';

const Navigation = () => {
  // return(
  //  <Fragment>
  //    <div className="navigation-bar">
  //       <div>
  //         <Link className="nav-logo" to="/">
  //           Lovastra
  //         </Link>
  //       </div>
  //      <div className="nav-links-container">
  //        <Link className="nav-link" to="/aboutus">
  //           About us
  //        </Link>
  //        <Link className="nav-link" to="/horoscope">
  //           Horoscope
  //        </Link>
  //        <Link className="nav-link" to="/astraltheme">
  //           Astral Theme
  //        </Link>
  //      </div>
  //      <Button buttonType="small">Sign in</Button>
  //    </div>
  //    <Outlet />
  //  </Fragment>
  // )

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="nav-container">
          <Link className="navbar-brand" to="/">Lovastra</Link>
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
