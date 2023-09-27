import { ADD_EXPERIENCES, ADD_EXPERIENCES_NEW, IS_DELETED } from "../action";
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
    case ADD_EXPERIENCES_NEW:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case IS_DELETED:
      return {
        ...state,
        data: [...state.data.filter(elem => elem._id !== action.payload)],
      };
    case EDIT_EXP: {
      let app = null;
      console.log("siamo in CASE");
      for (let i = 0; i < state.data.length; i++) {
        console.log("siamo in FOR");
        if (state.data[i]._id === action.payload.id) {
          console.log("siamo in IF");
          app = { ...state.data[i], ...action.payload.data };
          break;
        }
      }
      return {
        ...state,
        data: [...state.data.filter(elem => elem._id !== action.payload.id), app],
      };
    }
    default:
      return state;
  }
};
export default addExp;
