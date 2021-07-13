import actions from "./actions"
import {
    LOGIN_LOADING, LOGIN_FAILED, LOGIN_SUCCESS,
    REGISTER_LOADING, REGISTER_FAILED, REGISTER_SUCCESS, LOGOUT,
    CHANGE_USER_INFO

} from "./types"
export default {
    namespaced: true,   
    actions: actions,
    state: () => ({
        error: false,
        message: "",
        loading: false,
        data: null, 
        registerError: false,
        registerLoading: false,

        userAvatar:"",
        userName:""
    }),
    mutations: {
        [LOGIN_LOADING](state){
            state.loading = true
            state.data = null
            state.message = null
        },
        [LOGIN_FAILED](state,message){ 
            state.loading = false
            state.error = true
            state.message = message 
        },
        [LOGIN_SUCCESS](state,data){
            state.loading = false
            state.error = false
            state.data = data
        },
        [REGISTER_LOADING](state) {
            state.registerLoading = true
            state.data = null
            state.message = "",
            state.registerError = false
        },
        [REGISTER_FAILED](state, message) {
            state.registerLoading = false
            state.registerError = true
            state.message = message 
        },
        [REGISTER_SUCCESS](state, data) {
            state.registerLoading = true 
            state.registerError = false
            state.data = data
        },
        [LOGOUT](state) {
            state.loading = false 
            state.error = false
            state.data = null
        },
        [CHANGE_USER_INFO](state,data) {
            state.userAvatar =  data.avatar
            state.userName = data.name
        }
    },
    getters: {
        isError: (state) => {
            return !state.loading  && state.error
        }, 
        isRegisterError: (state) => {
            return !state.registerLoading  && state.registerError
        },
        errorMessage: (state) => {
            if(!state.error && !state.registerError){
                return null
            } 
            return state.message
        } 
    }
  }