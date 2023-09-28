import { JOBS } from "../action";

const initialState = {
  content: null,
};

const searchJobAction = (state = initialState, action) => {
  switch (action.type) {
    case JOBS:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default searchJobAction;
