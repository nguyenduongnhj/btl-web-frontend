import actions from "./actions"
import {LOGIN_LOADING,LOGIN_FAILED, LOGIN_SUCCESS} from "./types"
export default {
    namespaced: true,   
    actions: actions,
    state: () => ({
        error: false,
        message: "",
        loading: false,
        data: null
    }),
    mutations: {
        [LOGIN_LOADING](state){
            state.loading = true
            state.data = null
            state.message = null
        },
        [LOGIN_FAILED](state,message){
            console.log("LOGIN FAILED 1", state.error) 
            state.loading = false
            state.error = true
            state.message = message
            console.log("LOGIN FAILED", state.error) 
        },
        [LOGIN_SUCCESS](state,data){
            state.loading = false
            state.error = false
            state.data = data
        }
    },
    getters: {
        isError: (state) => {
            return !state.loading  && state.error
        },
        errorMessage: (state) => {
            if(!state.error){
                return null
            } 
            return state.message
        }
    }
  }