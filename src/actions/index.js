import axios from "axios"

const registerUser = (user) => {
    return (dispatch)=>{
        return axios.post('https://bizka.onrender.com/auth/register', user, {headers: {"Content-Type": "application/json"}}).then((res)=>{
            console.log(res)
            dispatch({type: 'REGISTER_USER', payload: {response: res, error: ''}})
        }).catch((err)=>{
            console.log(err)
            dispatch({type: 'REGISTER_USER', payload: {response: '', error: err.message}})
        })
    }
}

const login = (details) => {
    return {
        type: 'LOGIN',
        payload: details
    }
}

const forgotPassword = () => {
    return {
        type: "FORGOT_PASSWORD",
        payload: "email"
    }
}

export { registerUser, login, forgotPassword }