import axios from "axios";
import { LOGIN_BUTTON_CLICKED } from "../constants/action-types";

axios.defaults.headers.common["Authorization"] = `bearer ${localStorage.token}`;

export const loginUser = data => dispatch => {
  const { username, password } = data;
  console.log(data);
  axios
    .post("/api/auth/login/", {
      username,
      password
    })
    .then(res => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_BUTTON_CLICKED, payload: true });
    })
    .catch(err => console.log(err));
};
