export const TweetAppConstants= {
    REGISTER_PATH: "/register",
    LOGIN_URL: "/login",
    FORGOTPASSWORD_PATH: "/{username}/forgot",

    //TWEET URL'S
    GET_ALL_USERS_PATH: "/users/all",
    GET_ALL_TWEETS_PATH: "/all",
    POST_TWEET_PATH: "/{username}/add",
    UPDATE_TWEET_PATH: "/{username}/update/{id}",
    DELETE_TWEET_PATH: "/{username}/delete/{id}",
    LIKE_TWEET_PATH: "/{username}/like/{id}",
    REPLY_TWEET: "/{username}/reply/{id}",
    SEARCH_USER_PATH: "/user/search/{username}",
    GET_TWEETS_OF_USER_PATH: "/{username}"
}