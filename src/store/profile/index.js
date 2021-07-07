import actions from "./actions"
import {
    GET_PROFILE_LOADING, GET_PROFILE_FAILED, GET_PROFILE_SUCCESS, 
    UPDATE_PROFILE_LOADING, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILED,
    UPLOAD_AVATAR_SUCCESS, UPLOAD_AVATAR_FAILED, UPLOAD_AVATAR_LOADING, UPLOAD_AVATAR_PROGRESS,
    UPDATE_PASSWORD_FAILED, UPDATE_PASSWORD_LOADING, UPDATE_PASSWORD_SUCCESS,
    GET_TOTUR_INFO_LOADING, GET_TOTUR_INFO_FAILED, GET_TOTUR_INFO_SUCCESS,
    UPDATE_TOTUR_INFO_SUCCESS, UPDATE_TOTUR_INFO_FAILED, UPDATE_TOTUR_INFO_LOADING

} from './types'

export default {
    namespaced: true,   
    actions: actions,
    state: () => ({ 
        isGetProfileLoading: false,
        getProfileData: null,
        getProfileMessage: null,
        getProfileError: null,

        isUpdateProfileLoading: false,
        updateProfileMessage: null,
        updateProfileError: null,

        isUploadingAvatar: false,
        percentUploadAvatar: 0,
        isUploadAvatarError: false,
        uploadAvatarData: null,
        uploadAvatarMessage: null,

        isUpdatingPassword: false,
        updatePasswordMessage: false,
        isUpdatePasswordError: false,

        isGetTutorLoading: false,
        getTutorMessage: null,
        getTutorData:null,
        isGetTutorError: false,

        isUpdateTutorLoading: false,
        updateTutorMessage: null,
        isUpdateTotalError: false


    }),
    mutations: {
         /* get profile */
        [GET_PROFILE_LOADING](state){
            state.isGetProfileLoading = true
            state.getProfileData = null
            state.getProfileError = false
        },
        [GET_PROFILE_FAILED](state, message){
            state.isGetProfileLoading = false
            state.getProfileData = null
            state.getProfileMessage = message
            state.getProfileError = true
        },
        [GET_PROFILE_SUCCESS](state, data){
            state.isGetProfileLoading = false
            state.getProfileData = null
            state.getProfileData = data
            state.getProfileError = false
        },
        /* update profile */
        [UPDATE_PROFILE_LOADING](state){
            state.isUpdateProfileLoading = true,
            state.updateProfileMessage = null
            state.updateProfileError = false
        },
        [UPDATE_PROFILE_SUCCESS](state){
            state.isUpdateProfileLoading = false,
            state.updateProfileMessage = "success"
            state.updateProfileError = false
        },
        [UPDATE_PROFILE_FAILED](state,message){
            state.isUpdateProfileLoading = false
            state.updateProfileMessage = message
            state.updateProfileError = true
        }, 
        [UPLOAD_AVATAR_SUCCESS](state,data) {
            state.isUploadAvatarError = false
            state.isUploadingAvatar = false 
            state.uploadAvatarData = data
        },
        /* upload avatar*/
        [UPLOAD_AVATAR_FAILED](state,message) {
            state.isUploadAvatarError = true
            state.isUploadingAvatar = false 
            state.uploadAvatarData = null
            state.uploadAvatarMessage = message
        },
        [UPLOAD_AVATAR_LOADING](state) { 
            state.isUploadingAvatar = true
            state.percentUploadAvatar = 0
            state.uploadAvatarData = null
            state.uploadAvatarMessage = null
        },
        [UPLOAD_AVATAR_PROGRESS](state, value) {  
            state.percentUploadAvatar = value.loaded * 1.0 / value.total 
        },

         /* update password */
        [UPDATE_PASSWORD_FAILED](state, message) {
            state.isUpdatingPassword = false
            state.updatePasswordMessage = message
            state.isUpdatePasswordError = true
        },
        [UPDATE_PASSWORD_LOADING](state) {
            state.isUpdatingPassword = true
            state.updatePasswordMessage = null
            state.isUpdatePasswordError = false
        },
        [UPDATE_PASSWORD_SUCCESS](state, data) {
            console.log("success",data)
            state.isUpdatingPassword = false
            state.updatePasswordMessage = null
            state.isUpdatePasswordError = false
        },

        /* get tutor info */
        [GET_TOTUR_INFO_LOADING](state) {
            state.isGetTutorLoading = true
            state.getTutorMessage = null
            state.getTutorData = null
            state.isGetTutorError = false
        }, 
        [GET_TOTUR_INFO_SUCCESS](state, data) {
            state.isGetTutorLoading = false
            state.getTutorMessage = null
            state.getTutorData = data
            state.isGetTutorError = false
        }, 
        [GET_TOTUR_INFO_FAILED](state, message) {
            state.isGetTutorLoading = false
            state.getTutorMessage = message
            state.getTutorData = null
            state.isGetTutorError = true
        },

        /* update tutor info */
        [UPDATE_TOTUR_INFO_SUCCESS](state,data) {
            state.isUpdateTutorLoading = false
            state.updateTutorMessage = null
            state.isUpdateTotalError = false
            console.log(data)
        },
        [UPDATE_TOTUR_INFO_FAILED](state,message) {
            state.isUpdateTutorLoading = false
            state.updateTutorMessage = message
            state.isUpdateTotalError = true 
        },
        [UPDATE_TOTUR_INFO_LOADING](state) {
            state.isUpdateTutorLoading = true
            state.updateTutorMessage = null
            state.isUpdateTotalError = false 
        }

    }
}