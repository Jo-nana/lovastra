import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';

const Navigation = () => {
  return(
   <Fragment>
     <div>
        <div>
          <Link className="nav-logo" to="/">
            Lovastra
          </Link>
        </div>
       <div className="nav-link-container">
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
     </div>
     <Outlet />
   </Fragment>
  )
}

export default Navigation;
