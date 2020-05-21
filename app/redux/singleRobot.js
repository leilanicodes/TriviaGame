import axios from 'axios';

const SET_SINGLEROBOT = 'SET_SINGLEROBOT';

export const setSingleRobot = (robot) => {
  return {
    type: SET_SINGLEROBOT,
    robot,
  };
};

export const fetchSingleRobot = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/robots/${id}`);
      dispatch(setSingleRobot(data));
    } catch (err) {
      console.log('Error fetching single robot', err);
    }
  };
};

export default function singleRobotReducer(state = {}, action) {
  switch (action.type) {
    case SET_SINGLEROBOT: {
      return { robot: action.robot };
    }
    default:
      return state;
  }
}
