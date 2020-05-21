import React from 'react';
import { connect } from 'react-redux';
import { Robot } from './Robot';
import { fetchRobots } from '../redux/robots';

export class AllRobots extends React.Component {
  componentDidMount() {
    this.props.getRobots();
  }
  render() {
    const robots = this.props.robots;

    return (
      <div>
        <h1>All Robots</h1>
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

export default connect(mapState, mapDispatch)(AllRobots);
