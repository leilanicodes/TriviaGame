import axios from 'axios';

const SET_ROBOTS = 'SET_ROBOTS';
const ADD_ROBOT = 'ADD_ROBOT';
const DELETE_ROBOT = 'DELETE_ROBOT';

const setRobots = (robots) => {
  return {
    type: SET_ROBOTS,
    robots,
  };
};

const addRobot = (newRobot) => {
  return {
    type: ADD_ROBOT,
    newRobot,
  };
};

const deleteRobot = (deletedRobotId) => {
  return {
    type: DELETE_ROBOT,
    deletedRobotId,
  };
};

export default function robotsReducer(robots = [], action) {
  switch (action.type) {
    case SET_ROBOTS: {
      return action.robots;
    }
    case ADD_ROBOT: {
      return [...robots, action.newRobot];
    }
    case DELETE_ROBOT: {
      return robots.filter((robot) => robot.id !== action.deletedRobotId);
    }
    default:
      return robots;
  }
}

export const fetchRobots = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/robots');
      dispatch(setRobots(data));
    } catch (err) {
      console.log('Error fetching robots', err);
    }
  };
};

export const fetchAddedRobot = (newRobot) => {
  return async (dispatch) => {
    try {
      const { data: addedRobot } = await axios.post('/api/robots/', newRobot);

      dispatch(addRobot(addedRobot));
    } catch (err) {
      console.log('Error adding robot', err);
    }
  };
};

export const deleteRobotThunk = (robotId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/robots/${robotId}`);
      dispatch(deleteRobot(robotId));
    } catch (err) {
      console.log('Error deleting robot', err);
    }
  };
};
