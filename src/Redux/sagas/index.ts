// Imports
import {
    getNewsSaga,
    getSingleStorySaga,
    getSingleUserSaga
} from "./newsSaga";

// Modules
import { takeEvery, all } from "redux-saga/effects";

// Actions
import * as actionTypes from "../actions/actionTypes";


// News
export function* watchNews() {
    yield all([
        takeEvery(actionTypes.GET_NEWS, getNewsSaga),
        takeEvery(actionTypes.GET_SINGLE_STORY, getSingleStorySaga),
        takeEvery(actionTypes.GET_SINGLE_USER, getSingleUserSaga)
    ])
}