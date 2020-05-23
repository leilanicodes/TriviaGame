import axios from 'axios';

const SET_SINGLEROBOT = 'SET_SINGLEROBOT';
const UPDATE_ROBOT = 'UPDATE_ROBOT';

const setSingleRobot = (robot) => {
  return {
    type: SET_SINGLEROBOT,
    robot,
  };
};

const updateRobot = (updatedRobot) => {
  return {
    type: UPDATE_ROBOT,
    updatedRobot,
  };
};

export default function singleRobotReducer(robot = {}, action) {
  switch (action.type) {
    case SET_SINGLEROBOT: {
      return action.robot;
    }
    case UPDATE_ROBOT: {
      return action.updatedRobot;
    }

    default:
      return robot;
  }
}

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

export const updateRobotThunk = (updatedRobot) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/robots/${updatedRobot.id}`,
        updatedRobot
      );

      dispatch(updateRobot(data));
    } catch (err) {
      console.log('Error updating robot', err);
    }
  };
};
