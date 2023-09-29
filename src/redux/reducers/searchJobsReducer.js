import { SEARCH } from "../action";

const initialState = {
  content: [],
};

const searchJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default searchJobsReducer;
