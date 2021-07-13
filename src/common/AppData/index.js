



export const saveAuthData = (data) => {
    let dataString = JSON.stringify(data)
    localStorage.setItem("auth_data",dataString)
}

export const getAuthData = () => {
    let dataString = localStorage.getItem("auth_data")
    if (dataString == null ){
        return null
    }
    return JSON.parse(dataString)
}

export const cleanAuthData = () => {
    localStorage.clear("auth_data")
}

export const getAccessToken = () => {
    let data = getAuthData()
    return data.access_token
}

export const getUserInfo = () => {
    let data = getAuthData()
    return data.user
}

export const isAuthen = () => {
    return getAuthData() != null
}