import './dashboard.styles.scss';
import string from '../../../string';
import users from '../../../user';
import Button from '../../button/button.component'

import { signs } from '../../../signImages';

const Dashboard = () => {
  // variable to handle strings
  const block1String = string.dashboard.block1;
  const block3String = string.dashboard.block3;
  const block4String = string.dashboard.block4

  //formated date of the day
  const currentDate = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <div className="dashboard-container">
      <div className="block block1">
        <div className="block-header">
          <h1>{block1String.match}</h1>
        </div>
        <Button>
          {block1String.explore}
        </Button>
      </div>
      <div className="block block2">
        Block 2
      </div>
      <div className="block block3">
        <h3 className="block-header">
          {block3String.horoscope} {formattedDate}
        </h3>
        <div className="row">
          {signs.map((sign) => (
              <div className="col-md-3 mb-3" key={sign.name}>
                <div className="small-card">
                  <img src={sign.imgSrc} alt={sign.name} className="sign-image"/>
                  <p>{sign.name}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="block block4">
        <div className="block-header">
          <h3>{block4String.headerText}</h3>
        </div>
        <Button buttonType="chatButton">
          {users.user2.username}
        </Button>
        <Button buttonType="chatButton">
          {users.user3.username}
        </Button>
        <Button buttonType="chatButton">
         {users.user4.username}
        </Button>
        <a>{block4String.seeAll}</a>
      </div>
    </div>
  )
}

export default Dashboard;
