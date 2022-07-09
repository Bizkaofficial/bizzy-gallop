import axios from "axios";

const initState = {
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  phone_number: "+234",
  password: "",
  error: "",
  response: "",
};

const accounts = (state = initState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
      };
    case "FORGOT_PASSWORD":
      
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default accounts;
