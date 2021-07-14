
export const HOST = "http://222.252.92.106:3000"

export const endpoint = {
    login: "auth/login",
    register:"auth/register",
    getProfile:"users/me",
    updateProfile:"users/me/update",
    updateAvatar:"upload/avatar",
    updatePassword:"auth/change_password",
    tutorInfo:"users/me/profile",  
    updateTutor:"tutors/update",
    userProfile:"users",
    uploadPost:"posts/upload",
    uploadImages:"upload/images",
    getUserPosts:"posts",
    likePost:"posts/like",
    dislikePost:"posts/dislike",
    flowUser:"follows/follow",
    unFollowUser:"follows/unfollow",
    checkFlow:"users/me/followings",
    postDetail:"posts/detail",
    getComments:"comments",
    postComment:"comments/upload"
}

export const prefixToken = "Bearer "