import {postComments, getComments ,getPostDetail, uploadPost, uploadImages, getPosts, likePost, disLikePost , requestGetApi} from "@/network/ApiService.js"


import {
     POST_ARTICLE_LOADING, POST_ARTICLE_SUCCESS, POST_ARTICLE_FAILED,
     GET_ARTICLE_LOADING,
     GET_ARTICLE_SUCCESS,
     GET_ARTICLE_FAILED
} from "./type"
export default {

    async actionPostComment({commit,state},data) {
        commit(GET_ARTICLE_FAILED) 
        let comments = await postComments(data)
        console.log(state)
        return comments.data
    },
    async actionGetComments({commit,state},id){
        commit(GET_ARTICLE_FAILED) 
        let comments = await getComments(id)
        console.log(state)
        return comments.data
    },
    async actionGetPostDetail({commit,state}, id) {
        if (state.isGetPostLoading){
            return
        }
        commit(GET_ARTICLE_LOADING) 
        let result = await getPostDetail(id)
        commit(GET_ARTICLE_SUCCESS)
        return  result.data
    },
    actionLikePost(x,id){
        console.log(x)
        likePost(id)
    },
    actionDisLikePost(x,id){ 
        disLikePost(id)
    },
    async actionGetArticle({commit,state}, id){
        commit(GET_ARTICLE_LOADING)
        console.log(state,id)
        let result = await getPosts(id) 
        commit(GET_ARTICLE_SUCCESS)
        return  result.data
    },
    async actionLoadMore({commit,state},next) {
        if (state.isGetPostLoading){
            return
        }
        commit(GET_ARTICLE_LOADING)
        let result = await requestGetApi(next)
        commit(GET_ARTICLE_SUCCESS)
        return  result.data
    },

    actionUploadPost({ commit, state }, data) {
        if (state.isUpLoading) {
            return
        }

        function  _uploadPost(commit , upLoadPostData){
            uploadPost(upLoadPostData).then((result) => {
                if (result.statusCode != 200) {
                    commit(POST_ARTICLE_FAILED, result.message)
                    return
                }
                commit(POST_ARTICLE_SUCCESS, result.data)
            })
        }

        commit(POST_ARTICLE_LOADING) 
        if (data.content.image != null && data.content.image.length > 0) {
            uploadImages(data.content.image.map(m=>m.file)).then((result)=>{

                if (result.statusCode != 200){ 
                    commit(POST_ARTICLE_FAILED, result.message)
                    return
                } 
                let images =  result.data.map(m=>m.filename) 
                let upLoadPostData = {
                    content:{
                        text: data.content.text,
                        image: images
                    },
                    type:  data.type
                }
                _uploadPost( commit , upLoadPostData)
            }).catch((e)=>{
                console.log(e)
                commit(POST_ARTICLE_FAILED, "UPLOAD_ERROR")
            }) 
        } else {
            _uploadPost(commit , data)
        }
    }
}