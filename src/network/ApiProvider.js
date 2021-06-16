
import axios from 'axios'

import { HOST} from "./config"

const buildUrl = (endpoint) => {
return HOST+"/v1/"+endpoint
}
const buildHeader = () => {
    return   {
        'Content-Type': 'application/json;charset=utf-8'
      };
}

const errorHandler = (error) => {
    console.log("error", error)
    return  {
        statusCode : -1,
        message: error.message || "internal error",
        error
    }
}

export const get = async (endpoint,params = {}) => {
  try{
    let response = await  axios.get(buildUrl(endpoint), {params:params,headers:buildHeader()})  
    return response
  } catch (e) {
      return errorHandler(e)
  }
}


export const post = async (endpoint,data,params = {}) => {
    console.log("call login", endpoint)
    try{
      let response = await  axios.post(buildUrl(endpoint),data, {params:params,headers:buildHeader()})  
       console.log(response)
      return response
    } catch (e) {
        return errorHandler(e)
    }
  }
  
