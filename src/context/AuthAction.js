export const LoginStart = (userCredentials) =>({
    type:"LOGIN_START",
})

export const LoginSuccess = (user) =>({
    type:"LOGIN_SUCCESS",
    payload:user,
})


export const LoginError = (error) =>({
    type:"LOGIN_FAILURE",
    payload:error,
})

export const Follow = (userId) =>({
    type:"Follow",
    payload:userId
})

export const UnFollow = (userId) =>({
    type:"UNFollow",
    payload:userId
})