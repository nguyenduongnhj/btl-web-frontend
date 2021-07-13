
import {
    POST_ARTICLE_LOADING,
    POST_ARTICLE_SUCCESS,
    POST_ARTICLE_FAILED,
    GET_ARTICLE_LOADING,
    GET_ARTICLE_SUCCESS
}
from "./type"

import actions from "./action"
export default {
    namespaced: true,   
    actions: actions,
    state: () => ({ 
        
        isUpLoading: false,
        isUpError: false, 
        upPostData: null,
        upPostMessage: null,

        isGetPostLoading: false,
        isGetPostError: false

    }),
    mutations: {
        [POST_ARTICLE_LOADING](state,message) {
            console.log("POST_ARTICLE_LOADING")
            state.isUpLoading = true
            state.isUpError = true
            state.upPostData = null
            state.upPostMessage = message

        },
        [POST_ARTICLE_SUCCESS](state,data) {
            console.log("POST_ARTICLE_SUCCESS")
            state.isUpLoading = false
            state.isUpError = false
            state.upPostData = data
            state.upPostMessage = null
        },
        [POST_ARTICLE_FAILED](state) {
            state.isUpLoading = false
            state.isUpError = false
            state.upPostData = null
            state.upPostMessage = null
        },
        [GET_ARTICLE_LOADING](state) {
            state.isGetPostLoading = true
        },
        [GET_ARTICLE_SUCCESS](state) {
            state.isGetPostLoading = false
        }
    }
}