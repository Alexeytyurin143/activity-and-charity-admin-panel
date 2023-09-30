export const startSession = (user) => {
    localStorage.setItem('email', user.email)
    localStorage.setItem('accessToken', user.accessToken)
    localStorage.setItem('username', user.username)
}

export const getSession = () => {
    return {
        email: localStorage.getItem('email'),
        accessToken: localStorage.getItem('accessToken'),
        username: localStorage.getItem('username'),
    }
}

export const endSession = () => {
    localStorage.clear()
}

export const isLoggedIn = () => {
    return getSession().accessToken
}
