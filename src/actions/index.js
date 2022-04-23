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

export { registerUser, login }