
import {
     GET_PUBLIC_USER_INFO_FAILED,
      GET_PUBLIC_USER_INFO_SUCCESS, 
      GET_PUBLIC_USER_INFO_LOADING}
 from "./type"

import { 
    getPublicProfile
} from "@/network/ApiService.js"
 

export default {
    actionGetPublicInfo({commit,state},id) {
        if (state.isGetPublicInfoLoading) {
            return
        } 
        commit(GET_PUBLIC_USER_INFO_LOADING)
        getPublicProfile(id).then((result)=>{

            if (result.statusCode != 200){ 
                commit(GET_PUBLIC_USER_INFO_FAILED, result.message)
                return
            } 
            commit(GET_PUBLIC_USER_INFO_SUCCESS, result.data) 

        }) 
    }

}