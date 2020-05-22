import axios from 'axios';

const SET_ROBOTS = 'SET_ROBOTS';

export const setRobots = (robots) => {
  return {
    type: SET_ROBOTS,
    robots,
  };
};

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

export default function robotsReducer(robots = [], action) {
  switch (action.type) {
    case SET_ROBOTS: {
      return action.robots;
    }
    default:
      return robots;
  }
}
