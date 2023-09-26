import { ADD_EXPERIENCES } from "../action";

const initialState = {
  data: [],
};
const addExp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPERIENCES:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default addExp;
