import React from 'react';
import { connect } from 'react-redux';
import Robot from './Robot';
import { fetchRobots } from '../redux/robots';
import { withRouter } from 'react-router-dom';
import AddRobot from './AddRobot';

export class AllRobots extends React.Component {
  componentDidMount() {
    this.props.getRobots();
  }
  render() {
    const robots = this.props.robots;

    return (
      <div>
        <h1>All Robots</h1>
        <div>
          <AddRobot />
        </div>
        {robots && robots.length
          ? robots.map((robot) => <Robot key={robot.id} robot={robot} />)
          : 'There are no robots registered in the database.'}
      </div>
    );
  }
}

const mapState = (reduxState) => ({
  robots: reduxState.robots,
});

const mapDispatch = (dispatch) => ({
  getRobots: () => dispatch(fetchRobots()),
});

export default withRouter(connect(mapState, mapDispatch)(AllRobots));
