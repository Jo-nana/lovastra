import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import Button from '../../button/button.component.jsx';

import './navigation.styles.scss';

const Navigation = () => {


  return(
   <Fragment>
     <div className="navigation-bar">
        <div>
          <Link className="nav-logo" to="/">
            Lovastra
          </Link>
        </div>
       <div className="nav-links-container">
         <Link className="nav-link" to="/aboutus">
            About us
         </Link>
         <Link className="nav-link" to="/horoscope">
            Horoscope
         </Link>
         <Link className="nav-link" to="/astraltheme">
            Astral Theme
         </Link>
       </div>
       <Button buttonType="small">Sign in</Button>
     </div>
     <Outlet />
   </Fragment>
  )
}

export default Navigation;
