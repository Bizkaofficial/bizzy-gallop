const registerUser = (user) => {
    return {
        type: 'REGISTER_USER',
        payload: user
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