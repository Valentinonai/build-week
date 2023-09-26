import { ADD_EXPERIENCES, IS_DELETED } from "../action";
import { EDIT_EXP } from "../action";

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
    case IS_DELETED:
      return {
        ...state,
        data: [...state.data.filter((elem) => elem._id !== action.payload._id)],
      };
    case EDIT_EXP: {
      let app = null;
      for (let i = 0; i < state.data.length; i++) {
        if (state.data[i]._id === action.payload.id) {
          app = { ...state.data[i], ...action.payload.data };
        }
      }
      return {
        ...state,
        data: [...state.data.filter((elem) => elem._id !== action.payload.id), ...app],
      };
    }
    default:
      return state;
  }
};
export default addExp;
