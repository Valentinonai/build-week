import {
  EXPERIENCES_MODAL_OFF,
  EXPERIENCES_MODAL_ON,
  EXPERIENCES_PROPS,
  EXPERIENCES_RESET_PROPS,
  MODAL_OFF,
  MODAL_ON,
} from "../action";

const initialState = {
  isShowing: false,
  experiencesIsShowing: false,
  propelem: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OFF:
      return {
        ...state,
        isShowing: action.payload,
      };
    case MODAL_ON:
      return {
        ...state,
        isShowing: action.payload,
      };
    case EXPERIENCES_MODAL_OFF:
      return {
        ...state,
        experiencesIsShowing: action.payload,
      };
    case EXPERIENCES_MODAL_ON:
      return {
        ...state,
        experiencesIsShowing: action.payload,
      };
    case EXPERIENCES_PROPS:
      return {
        ...state,
        propelem: action.payload,
      };

    case EXPERIENCES_RESET_PROPS:
      return {
        ...state,
        propelem: action.payload,
      };

    default:
      return state;
  }
};
export default modalReducer;
