import Button from '../../button/button.component.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import './home.styles.scss'
import AstroIllustration from '../../../assets/images/astro-illustration.svg';

const Home  = () => {
  return(
    <div className="main-container">
      <div className="row home-container">
        <div className="col-sm-6 home-info">
          <h1>Blast off into the unknown and find your cosmic match!</h1>
          <h1>Try <strong>Lovastra</strong></h1>
          <div style={{ maxWidth: "150px", marginTop: "20px" }}>
            <Button buttonType='secondary-button'>
              Start
            </Button>
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
