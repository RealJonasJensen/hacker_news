import * as actions from "../actions/actionTypes";

// Interfaces

interface Action {
    type: string;
    payload: any;
}

interface State {
    stories: object[];
    loading: boolean;
}

// State

const initialState = {
    stories: [],
    loading: false
};

export default (state: State = initialState, action: Action) => {
    switch (action.type) {

        // Get News

        case actions.GET_NEWS:
            return {
                ...state,
                stories: [],
                loading: true
            }
        case actions.GET_NEWS_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case actions.GET_NEWS_FAILURE:
            return {
                ...state,
                loading: false
            }

        // Single Story

        case actions.GET_SINGLE_STORY:
            return {
                ...state,
                loading: true
            }
        case actions.GET_SINGLE_STORY_SUCCESS:
            const newStories: object[] = [...state.stories];
            newStories.push(action.payload);
            return {
                ...state,
                stories: newStories,
                loading: false
            }
        case actions.GET_SINGLE_STORY_FAILURE:
            return {
                ...state,
                loading: false
            }

        // Get Single User

        case actions.GET_SINGLE_USER:
            return {
                ...state,
                loading: true
            }
            
        case actions.GET_SINGLE_USER_SUCCESS:

            const newUserStories: object[] = [...state.stories];
            newUserStories.forEach((story: object) => {
                // story.by causes type error
                if (story['by'] === action.payload.id) {
                    story['by'] = action.payload;
                }
            })

            return {
                ...state,
                stories: newUserStories,
                loading: false
            }

        case actions.GET_SINGLE_USER_FAILURE:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
};
