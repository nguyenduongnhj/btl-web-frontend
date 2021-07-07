 
import {post, get, upload} from "./ApiProvider"
import {endpoint} from "./config"

export const login = async (data) => { 
  return  post(endpoint.login, {username: data.username, password: data.password })
}

export const register = async (data) => {  
  return  await post(endpoint.register, data)
}

export const getUserProfile = async (data)=> {
  return  await get(endpoint.getProfile, data)
}

export const updateProfile = async (data) => {  
  return  await post(endpoint.updateProfile, data)
}

export const uploadAvatar = async (userId, file, progress = null) => {
  let formData = new FormData()
  formData.append("avatar",file)
  return await upload(endpoint.updateAvatar,formData,{}, userId, progress)
}

export const changePassword = async (data) => {
  return  await post(endpoint.updatePassword, data)
}

export const getTutorInfo = async (id) => {
  console.log("id",id)
  return await get(endpoint.tutorInfo,{}, null)
}

export const updateTutor = async (data) => {
  return await post(endpoint.updateTutor,data)
}

export const getPublicProfile = async (id) => {
  return await get(endpoint.userProfile,{},id)
}

