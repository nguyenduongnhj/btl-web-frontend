
import {
    GET_PUBLIC_USER_INFO_FAILED,
     GET_PUBLIC_USER_INFO_SUCCESS, 
     GET_PUBLIC_USER_INFO_LOADING}
from "./type"

import actions from "./action"
export default {
    namespaced: true,   
    actions: actions,
    state: () => ({ 
        
        isGetPublicInfoLoading: false,
        isGetPublicInfoError: false, 
        getPublicInfoData: null,
        getPublicDataMessage: null

    }),
    mutations: {
        [GET_PUBLIC_USER_INFO_FAILED](state,message) {

            state.isGetPublicInfoLoading = false
            state.isGetPublicInfoError = true
            state.getPublicInfoData = null
            state.getPublicDataMessage = message

        },
        [GET_PUBLIC_USER_INFO_SUCCESS](state,data) {
            state.isGetPublicInfoLoading = false
            state.isGetPublicInfoError = false
            state.getPublicInfoData = data
            state.getPublicDataMessage = null
        },
        [GET_PUBLIC_USER_INFO_LOADING](state) {
            state.isGetPublicInfoLoading = true
            state.isGetPublicInfoError = false
            state.getPublicInfoData = null
            state.getPublicDataMessage = null
        }
    }
}