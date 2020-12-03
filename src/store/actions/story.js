import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const fetchStoryStart = () => {
    return {
        type: actionTypes.FETCH_STORY_START
    };
};

export const fetchStorySuccess = (story) => {
    return {
        type: actionTypes.FETCH_STORY_SUCCESS,
        story: story
    };
};

export const fetchStoryFail = (error) => {
    return {
        type: actionTypes.FETCH_STORY_FAIL,
        error: error
    };
};

export const fetchStory = (id) => {
    return dispatch => {
        dispatch(fetchStoryStart());
        axios.get('http://localhost:3000/stories/' + id)
        .then(res => {
            // console.log('single story', res.data);
            dispatch(fetchStorySuccess(res.data))
            }
        )
        .catch(error => {
            dispatch(fetchStoryFail(error));
        })
    };
};
