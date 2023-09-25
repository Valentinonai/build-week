import { MODAL_OFF, MODAL_ON } from "../action";

const initialState = {
  isShowing: false
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OFF:
      return {
        ...state,
        isShowing: action.payload
      };
    case MODAL_ON:
      return {
        ...state,
        isShowing: action.payload
      };

    default:
      return state;
  }
};
export default modalReducer;
