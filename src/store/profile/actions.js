import {
    GET_PROFILE_LOADING, GET_PROFILE_FAILED, GET_PROFILE_SUCCESS, 
    UPDATE_PROFILE_LOADING, UPDATE_PROFILE_FAILED, UPDATE_PROFILE_SUCCESS, 
    UPLOAD_AVATAR_LOADING, UPLOAD_AVATAR_FAILED, UPLOAD_AVATAR_SUCCESS, UPLOAD_AVATAR_PROGRESS,
    UPDATE_PASSWORD_FAILED, UPDATE_PASSWORD_LOADING, UPDATE_PASSWORD_SUCCESS,
    GET_TOTUR_INFO_LOADING, GET_TOTUR_INFO_FAILED, GET_TOTUR_INFO_SUCCESS,
    UPDATE_TOTUR_INFO_LOADING,UPDATE_TOTUR_INFO_FAILED, UPDATE_TOTUR_INFO_SUCCESS

} from './types'

import { getTutorInfo, getUserProfile , 
    uploadAvatar, updateProfile, changePassword,
    updateTutor
} from "@/network/ApiService.js"
 

export default{
    actionGetProfile({ commit, state }, {user}){
        if (state.isGetProfileLoading) {
            return
        }
        commit(GET_PROFILE_LOADING) 
        getUserProfile({user:user}).then((result)=>{
            if (result.statusCode != 200){ 
                commit(GET_PROFILE_FAILED, result.message)
                return
            } 
            commit(GET_PROFILE_SUCCESS, result.data) 
        })
    },
    actionUpdateProfile({ commit, state }, data){
        if (state.isUpdateProfileLoading) {
            return
        }
        commit(UPDATE_PROFILE_LOADING) 
        updateProfile(data).then((result)=>{
            if (result.statusCode != 200){ 
                commit(UPDATE_PROFILE_FAILED, result.message)
                return
            } 
            commit(UPDATE_PROFILE_SUCCESS, result.data) 
        })
    },
    actionUpdateAvatar({ commit, state }, {file,id}) {

        if (state.isUpdateProfileLoading) {
            return
        }
        commit(UPLOAD_AVATAR_LOADING)

        uploadAvatar(id, file, (loaded, total) => {
            commit(UPLOAD_AVATAR_PROGRESS, {loaded: loaded, total: total})
        }).then((result)=>{
            if (result.statusCode != 200){ 
                commit(UPLOAD_AVATAR_FAILED, result.message)
                return
            } 
            commit(UPLOAD_AVATAR_SUCCESS, result.data) 
        })
    }, 
    actionChangePassword:({ commit, state},{oldPassword,password,confirmPassword}) => {

        if (state.isUpdatingPassword) {
            return
        }

        if (oldPassword == '' || password == ''){
            commit(UPDATE_PASSWORD_FAILED,'password_incorect')
            return
        }

        if (confirmPassword != password) {
            commit(UPDATE_PASSWORD_FAILED,'confirm_password_not_match')
            return
        }
        commit(UPDATE_PASSWORD_LOADING)
        changePassword({old_pass:oldPassword,new_pass:password,confirm_pass:confirmPassword}).then((result)=>{
            if (result.statusCode != 200){ 
                commit(UPDATE_PASSWORD_FAILED, result.message)
                return
            } 
            commit(UPDATE_PASSWORD_SUCCESS,result.data)
        }) 
    },
    actionGetTutorInfo: ({ commit, state},id) => {

        if (state.isGetTutorLoading) {
            return
        }
        
        commit(GET_TOTUR_INFO_LOADING)
 
        getTutorInfo(id).then((result)=>{
            if (result.statusCode != 200){ 
                commit(GET_TOTUR_INFO_FAILED, result.message)
                return
            } 
            commit(GET_TOTUR_INFO_SUCCESS,result.data)
        }) 
    },
    actionUpdateTutor: (({ commit, state},data) => {
            console.log(commit,state,data)
        if (state.isUpdateTutorLoading) {
            return 
        }
        commit(UPDATE_TOTUR_INFO_LOADING)
        updateTutor(data).then((result) => {
            if (result.statusCode != 200){ 
                commit(UPDATE_TOTUR_INFO_FAILED, result.message)
                return
            } 
            commit(UPDATE_TOTUR_INFO_SUCCESS,result.data)
        })

    })
}