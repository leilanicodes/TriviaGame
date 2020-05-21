import axios from 'axios';

const SET_SINGLEPROJECT = 'SET_SINGLEPROJECT';

export const setSingleProject = (project) => {
  return {
    type: SET_SINGLEPROJECT,
    project,
  };
};

export const fetchSingleProject = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/projects/${id}`);
      dispatch(setSingleProject(data));
    } catch (err) {
      console.log('Error fetching single project', err);
    }
  };
};

export default function singleProjectReducer(state = {}, action) {
  switch (action.type) {
    case SET_SINGLEPROJECT: {
      return { project: action.project };
    }
    default:
      return state;
  }
}
