import * as actionTypes from './actionTypes';
import axios from 'axios';

export const postStoryStart = () => {
    return {
        type: actionTypes.POST_STORY_START
    }
}

export const postStorySuccess = (id, storyData) => {
    return {
        type: actionTypes.POST_STORY_SUCCESS,
        storyId: id,
        storyData: storyData
    }
}

export const postStoryFail = (error) => {
    return {
        type: actionTypes.POST_STORY_FAIL,
        error: error
    }
}

export const postStory = (storyData) => {
        return dispatch => {
            dispatch(postStoryStart());
            axios.post('localhost:3000/stories')
            .then(res => {
                console.log(res.data);
                dispatch(postStorySuccess('testing post', res.data, storyData));
            })
            .catch(error => {
                dispatch(postStoryFail(error));
            });
        }
};


