 
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
  console.log(id)
  return await get(endpoint.tutorInfo,{}, null)
}

export const updateTutor = async (data) => {
  return await post(endpoint.updateTutor,data)
}

export const getPublicProfile = async (id) => {
  return await get(endpoint.userProfile,{},id)
}

export const uploadPost = async (data) => {
  return await post(endpoint.uploadPost,data,null)
}

export const uploadImages = async (images, progress = null) => {
  let formData = new FormData()
  
  for (var k in images) {
    let image = images[k]
    formData.append("images",image)
  }

  return await upload(endpoint.uploadImages,formData,{}, null, progress)
}

export const getPosts = async (id) => {
  return await get(endpoint.getUserPosts,{},id)
}

export const likePost = async (id) => {
  return await get(endpoint.likePost,{},id)
}

export const disLikePost = async (id) => {
  return await get(endpoint.dislikePost,{},id)
}

export const flowUser = async (id) => {
  return await post(endpoint.flowUser,{follow_id:id},null)
}
export const unFlowUser = async (id) => {
  return await post(endpoint.unFollowUser,{follow_id:id},null)
}

export const checkFlowUser = async (id) => {
  return await get(endpoint.checkFlow, {},id)
}

export const requestGetApi = async (url, params) => {
  return await get(url, params,null)
}

export const getPostDetail = async ( id ) => {
  return await get(endpoint.postDetail, {}, id)
}

export const getComments = async (id) => {
  return await get (endpoint.getComments,{}, id)
}

export const postComments = async (data) => {
  return await post(endpoint.postComment,data,null)
}