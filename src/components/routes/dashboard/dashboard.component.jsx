import './dashboard.styles.scss';
import string from '../../../string';
import Button from '../../button/button.component'


const Dashboard = () => {

  const block1String = string.dashboard.block1;

  return (
    <div className="container">
      <div className="block block1">
        <h1>{block1String.match}</h1>
        <Button>
          {block1String.explore}
        </Button>
      </div>
      <div className="block block2">Block 2</div>
      <div className="block block3">Block 3</div>
      <div className="block block4">Block 4</div>
    </div>
  )
}

export default Dashboard;
