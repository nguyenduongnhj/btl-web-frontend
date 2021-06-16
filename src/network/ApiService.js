
 
import {post} from "./ApiProvider"
import {endpoint} from "./config"

export const login = async (data)=>{ 
  
  return  post(endpoint.login, {username: data.username, password: data.password })
}

export const register = async (data)=>{  
    return  post(endpoint.register, data)
}