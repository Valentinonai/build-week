import { ADD_EXPERIENCES, IS_DELETED } from "../action";

const initialState = {
  data: [],
  deleteResp: ""
};
const addExp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPERIENCES:
      return {
        ...state,
        data: action.payload
      };
    case IS_DELETED:
      return {
        ...state,
        deleteResp: action.payload
      };
    default:
      return state;
  }
};
export default addExp;
