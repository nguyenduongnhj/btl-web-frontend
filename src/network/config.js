export const HOST = "http://localhost:3000"

export const endpoint = {
    login: "auth/login",
    register:"auth/register",
    getProfile:"users/me",
    updateProfile:"users/me/update",
    updateAvatar:"upload/avatar",
    updatePassword:"auth/change_password",
    tutorInfo:"users/me/profile",  
    updateTutor:"tutors/update",
    userProfile:"users"
}

export const prefixToken = "Bearer "