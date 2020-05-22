import axios from 'axios';

const SET_ROBOTS = 'SET_ROBOTS';
const ADD_ROBOT = 'ADD_ROBOT';

export const setRobots = (robots) => {
  return {
    type: SET_ROBOTS,
    robots,
  };
};

export const addRobot = (newRobot) => {
  return {
    type: ADD_ROBOT,
    newRobot,
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
      console.log('Error adding a robot', err);
    }
  };
};
