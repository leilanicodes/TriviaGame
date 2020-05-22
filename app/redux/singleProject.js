import axios from 'axios';

const SET_SINGLEPROJECT = 'SET_SINGLEPROJECT';

export const setSingleProject = (project) => {
  return {
    type: SET_SINGLEPROJECT,
    project,
  };
};

export default function singleProjectReducer(project = {}, action) {
  switch (action.type) {
    case SET_SINGLEPROJECT: {
      return action.project;
    }
    default:
      return project;
  }
}

export const fetchSingleProject = (projectId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/projects/${projectId}`);
      dispatch(setSingleProject(data));
    } catch (err) {
      console.log('Error fetching single project', err);
    }
  };
};
