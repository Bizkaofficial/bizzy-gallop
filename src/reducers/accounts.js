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
      if(action.payload.response !== ''){
        return {...state, response: action.payload.response}
      }else if(action.payload.error !== ''){
        return {...state, error: action.payload.error}
      }else{
        return {...state}
      }
      // console.log(action.payload);
      // {
      //     "first_name": action.payload.first_name,
      //     "last_name": action.payload.last_name,
      //     "email": action.payload.email,
      //     "username": action.payload.username,
      //     "phone_number": action.payload.phone_number,
      //     "password": action.payload.password
      // }
      // axios.post("https://bizka.onrender.com/auth/register", action.payload).then((res) => {
      //     console.log(res)
      //     return {
      //       ...state,
      //       response: res
      //     }
      //   }).catch((err) => {
      //     console.log(err)
      //     return {
      //       ...state,
      //       error: err.message,
      //     };
      //   });
      // return {
      //   ...state,
      // };
    case "FORGOT_PASSWORD":
      axios
        .post(
          "http://bizka.onrender.com/accounts/request-reset-email/",
          action.payload
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
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
