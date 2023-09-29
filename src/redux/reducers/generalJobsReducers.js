import { GENERAL_JOBS_LIST, GENERAL_JOBS_LIST_CATEGORY, GENERAL_JOBS_LIST_COMPANY } from "../action/jobsAction";

const initialState = {
  jobsList: [],
};
const generalJobsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GENERAL_JOBS_LIST:
      return {
        ...state,
        jobsList: action.payload,
      };
    case GENERAL_JOBS_LIST_CATEGORY:
      return {
        ...state,
        jobsList: action.payload,
      };
    case GENERAL_JOBS_LIST_COMPANY:
      return {
        ...state,
        jobsList: action.payload,
      };

    default:
      return state;
  }
};

export default generalJobsReducers;
