import { LOGIN_BUTTON_CLICKED } from "../constants/action-types";

const initialState = {
  isAuth: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_BUTTON_CLICKED:
      return {
        isAuth: action.payload
      };
    default:
      return state;
  }
}
