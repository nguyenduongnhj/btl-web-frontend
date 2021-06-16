 
import {LOGIN_LOADING,LOGIN_FAILED, LOGIN_SUCCESS} from "./types"
import {login} from "@/network/ApiService.js"
export default{
    actionLogin: ({ commit, state }, {username,password}) => {
        if( state.loading){
            return
        }
        commit(LOGIN_LOADING)
     
         login({username:username,password: password }).then((result)=>{
            if (result.statusCode != 0){

                console.log(result)
                commit(LOGIN_FAILED, result.message)
                return
            }
            commit(LOGIN_SUCCESS, result.data) 
        })
    } 
}