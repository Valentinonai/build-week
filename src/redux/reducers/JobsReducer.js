import { GET_LIST_WORKS, ADD_FAVOURITE_JOBS, REMOVE_FAVOURITE_JOBS } from "../action";

const initialState = {
  jobs: [],
  favJobs: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_WORKS:
      return {
        ...state,
        jobs: action.payload,
      };
    case ADD_FAVOURITE_JOBS:
      return {
        ...state,
        favJobs: [...state.favJobs, action.payload],
      };
    case REMOVE_FAVOURITE_JOBS:
      return {
        ...state,
        favJobs: state.favJobs.filter((el) => el !== action.payload),
      };
    default:
      return state;
  }
};

export default mainReducer;
