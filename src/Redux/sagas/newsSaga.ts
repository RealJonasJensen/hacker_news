import { put, all } from "redux-saga/effects";

// Modules
import axios from "axios";
// Actions
import * as actions from "../actions/index";

// Get Stories

export function* getNewsSaga(action: any) {
    const url: string = "https://hacker-news.firebaseio.com/v0/topstories.json";
    const stories: number[] = [];
    // AJAX Here
    try {
        const response = yield axios.get(url);
        // console.log(response);

        // Get Ten Random
        const alreadyUsed: number[] = [];
        const length: number = response.data.length - 1;

        // While Loop 
        let going: boolean = true;
        while (going) {
            // Sort 10 random articles.
            const randomNumber = Math.floor(Math.random() * length);
            if (!alreadyUsed.includes(randomNumber)) {
                stories.push(response.data[randomNumber]);
                alreadyUsed.push(randomNumber);
            }

            // Break when there is 10.
            if (stories.length === 10) {
                going = false;
            }
        }

        yield put(actions.getNewsSuccess())
        // Get All The Single Stories
        yield all(stories.map(x => put(actions.getSingleStory(x))))


    } catch (err) {
        // console.log(err);
        yield put(actions.getNewsFailure("Something went wrong."))
    }
}

// Get Single Story

export function* getSingleStorySaga(action: any) {
    const url: string = "https://hacker-news.firebaseio.com/v0/item/" + action.payload + ".json";
    try {
        const response = yield axios.get(url);
        // console.log(response);
        yield put(actions.getSingleUser(response.data.by));
        yield put(actions.getSingleStorySuccess(response.data));
    } catch (err) {
        // console.log(err);
        yield put(actions.getSingleStoryFailure("Something went wrong when getting single story."));
    }
}

// Get Single User

export function* getSingleUserSaga(action:any) {
    const url: string = "https://hacker-news.firebaseio.com/v0/user/" + action.payload + ".json";
    try {
        const response = yield axios.get(url);
        // console.log(response);
        yield put(actions.getSingleUserSuccess(response.data));
    } catch (err) {
        // console.log(err);
        yield put(actions.getSingleUserFailure("Something went wrong when getting single user."));
    }

}