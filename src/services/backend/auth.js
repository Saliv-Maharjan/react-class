import axios from "axios";
import { sha256 } from "../../utils/encryption";

export const AUTH_TOKEN = "112233";

export const doLogin = async (email, password) => {
  const response = await axios.get(
    `http://localhost:4000/userData?email=${email}&password=${await sha256(
      password
    )}`
  );
  if (response.data.length > 0) {
    localStorage.setItem("AUTH_TOKEN", AUTH_TOKEN);
    localStorage.setItem("USER_EMAIL", response.data[0].email);
    return true;
  } else {
    return false;
  }
};
