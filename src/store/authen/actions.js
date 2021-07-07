 
import {
    LOGIN_LOADING, LOGIN_FAILED, LOGIN_SUCCESS,
    REGISTER_LOADING, REGISTER_FAILED, REGISTER_SUCCESS, LOGOUT,
    CHANGE_USER_INFO
} from "./types"
import {login,register} from "@/network/ApiService.js"

import { saveAuthData, cleanAuthData } from "@/common/AppData"
export default{
    actionLogout: ({ commit })=>{

        cleanAuthData()
        commit(LOGOUT)
    },
    actionLogin: ({ commit, state }, {username,password}) => {
        if( state.loading){
            return
        }
        commit(LOGIN_LOADING)
     
         login({username:username,password: password }).then((result)=>{
            if (result.statusCode != 200){ 
                commit(LOGIN_FAILED, result.message)
                return
            }
            saveAuthData(result.data)

            commit(LOGIN_SUCCESS, result.data) 
        })
    },
    actionRegister:({ commit, state }, data) => {
        if( state.registerLoading){
            return
        }

        commit(REGISTER_LOADING) 
        if (data.password != data.confirmPassword){
            commit(REGISTER_FAILED, "confirm_password_not_match")
            return
        } 

        if (data.password.trim().length < 6){
            commit(REGISTER_FAILED, "password_empty")
            return
        }

        if (data.username.trim() == ""){
            commit(REGISTER_FAILED, "username_empty")
            return
        }

        if (data.fullname.trim() == ""){
            commit(REGISTER_FAILED, "fullname_empty")
            return
        }

        register({...data,first_name: data.fullname,phone_number: data.phoneNumber}).then((result)=>{
           
            if (result.statusCode != 200){ 
                commit(REGISTER_FAILED, result.message)
                return
            }
            commit(REGISTER_SUCCESS, result) 
        })
    },
    actionChangeUserInfo:({ commit, state }, data) => { 
        commit(CHANGE_USER_INFO,{
            name: data.name || state.userName,
            avatar: data.avatar || state.userAvatar
        })
    }
    
}