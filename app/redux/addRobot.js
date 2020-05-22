import axios from 'axios';

const ADD_ROBOT = 'ADD_ROBOT';

export const addRobot = (newRobot) => {
  return {
    type: ADD_ROBOT,
    newRobot,
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

export default function addRobotReducer(newRobot = {}, action) {
  switch (action.type) {
    case ADD_ROBOT: {
      return action.newRobot;
    }
    default:
      return newRobot;
  }
}
