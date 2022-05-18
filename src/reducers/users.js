import axios from "axios"

const initState = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    phone_number: "+234",
    password: "",
    error: "",
}

const users = (state=initState, action) => {
    switch(action.type) {
        case 'REGISTER_USER':
            // console.log(action.payload);
            // {
            //     "first_name": action.payload.first_name,
            //     "last_name": action.payload.last_name,
            //     "email": action.payload.email,
            //     "username": action.payload.username,
            //     "phone_number": action.payload.phone_number,
            //     "password": action.payload.password
            // }
            axios.post('http://bizka.onrender.com/accounts/register/', action.payload)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                return {
                    ...state,
                    error: err.message
                }
            })
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}

export default users;