import React from 'react';
import { connect } from 'react-redux';
import { Robot } from './Robot';
import { fetchRobots } from '../redux/robots';

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  componentDidMount() {
    this.props.getRobots();
  }
  render() {
    const robots = this.props.robots;

    return (
      <div>
        {robots && robots.length
          ? robots.map((robot) => <Robot key={robot.id} robot={robot} />)
          : 'No Robots'}
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
