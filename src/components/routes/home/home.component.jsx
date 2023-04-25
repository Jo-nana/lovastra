import { Link } from 'react-router-dom';
import Button from '../../button/button.component.jsx';

import strings from '../../../string.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import './home.styles.scss'
import AstroIllustration from '../../../assets/images/astro-illustration.svg';


const Home  = () => {
   return(
    <div className="main-container">
      <div className="row home-container">
        <div className="col-sm-6 home-info">
          <h1>{strings.homePage.welcomeMessage}</h1>
          <h1>{strings.homePage.try} <strong>{strings.general.lovastra}.</strong></h1>
          <div style={{ maxWidth: "150px", marginTop: "20px" }}>
            <Link to="/signUp">
              <Button buttonType='secondary-button'>
                {strings.general.startButtonText}
              </Button>
            </Link>
          </div>
        </div>
        <div className="col-sm-6">
          <img src={AstroIllustration} alt="astro-illustratio " />
        </div>
      </div>
    </div>
  )
}

export default Home;
