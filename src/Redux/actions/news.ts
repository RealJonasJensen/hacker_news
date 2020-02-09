import * as actions from "./actionTypes";

// Get News

export const getNews: Function = () => {
    return {
        type: actions.GET_NEWS
    };
};

export const getNewsSuccess: Function = (data: object) => {
    return {
        type: actions.GET_NEWS_SUCCESS
    };
};

export const getNewsFailure: Function = (error: string) => {
    return {
        type: actions.GET_NEWS_FAILURE
    };
};

// Get Single Story

export const getSingleStory: Function = (id: string) => {
    return {
        type: actions.GET_SINGLE_STORY,
        payload: id
    }
}

export const getSingleStorySuccess: Function = (data: object) => {
    return {
        type: actions.GET_SINGLE_STORY_SUCCESS,
        payload: data
    }
}

export const getSingleStoryFailure: Function = (error: string) => {
    return {
        type: actions.GET_SINGLE_STORY_FAILURE,
        payload: error
    }
}

// Get Single User

export const getSingleUser: Function = (id: string) => {
    return {
        type: actions.GET_SINGLE_USER,
        payload: id
    }
}

export const getSingleUserSuccess: Function = (data: object) => {
    return {
        type: actions.GET_SINGLE_USER_SUCCESS,
        payload: data
    }
}

export const getSingleUserFailure: Function = (error: string) => {
    return {
        type: actions.GET_SINGLE_USER_FAILURE,
        payload: error
    }
}