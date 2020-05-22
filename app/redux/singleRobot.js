import axios from 'axios';

const SET_SINGLEROBOT = 'SET_SINGLEROBOT';

export const setSingleRobot = (robot) => {
  return {
    type: SET_SINGLEROBOT,
    robot,
  };
};

export const fetchSingleRobot = (robotId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/robots/${robotId}`);
      dispatch(setSingleRobot(data));
    } catch (err) {
      console.log('Error fetching single robot', err);
    }
  };
};

export default function singleRobotReducer(robot = {}, action) {
  switch (action.type) {
    case SET_SINGLEROBOT: {
      return action.robot;
    }
    default:
      return robot;
  }
}
