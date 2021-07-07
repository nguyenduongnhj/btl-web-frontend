
import axios from 'axios'

import { HOST, endpoint, prefixToken} from "./config"
import { isAuthen, getAccessToken } from "@/common/AppData"

export const buildAvatarUrl = (path) => {
  return HOST + path
}

const buildUrl = (path, id = null) => {
  switch (path)
  { 
    case endpoint.updatePassword:
    case endpoint.login: 
    case endpoint.register:
      return HOST+"/"+path + (id==null?"":`/${id}`)
    default:
      return HOST+"/v1/"+path + (id==null?"":`/${id}`)

  } 
}

const buildHeader = (isUpload = false) => {

    var headers =   {
        'Content-Type': isUpload ?'multipart/form-data':'application/json;charset=utf-8',
    };

    if (isAuthen()){
      headers["Authorization"] = prefixToken + getAccessToken()
    }

    return headers
}

const errorHandler = (error) => {
    console.log("error", error)
    var errorResponse = error.response && error.response.data
    return  {
        statusCode : -1,
        message:  (errorResponse && errorResponse.message) ||error.message || "internal error",
        error
    }
}

export const get = async (endpoint,params = {}, id = null) => {
  try{
    let response = await  axios.get(buildUrl(endpoint,id), {params:params,headers:buildHeader()})  
    return response.data
  } catch (e) {
      return errorHandler(e)
  }
}


export const post = async (endpoint,data,params = {}, id = null) => { 
    try{
      let response = await  axios.post(buildUrl(endpoint, id),data, {params:params,headers:buildHeader()})  
      return response.data
    } catch (e) { 
        return errorHandler(e)
    }
}
  
export const upload = async (endpoint,formdata,params = {}, id = null, progress = null) => { 
  try{
      let response = await  axios.post(buildUrl(endpoint,id),formdata, {params:params,headers:buildHeader(true), onUploadProgress: function(progressEvent ){ 
      progress && progress(progressEvent.loaded,  progressEvent.total)
    }})  
    return response.data
  } catch (e) { 
      return errorHandler(e)
  }
}