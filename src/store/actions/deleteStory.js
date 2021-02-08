import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';


export const deleteStoryStart = () => {
    return {
        type: actionTypes.DELETE_STORY_START
    };
};

export const deleteStorySuccess = (id, data) => {
    return {
        type: actionTypes.DELETE_STORY_SUCCESS,
        id: id,
        data: data
        
    };
};

export const deleteStoryFail = (error) => {
    return {
        type: actionTypes.DELETE_STORY_FAIL,
        error: error
    };
};

export const deleteStory = (id, data) => {
    return dispatch => {
        dispatch(deleteStoryStart());
        axios.delete('http://localhost:3000/stories/' + id, data)
        // .then(res => console.log('where is my data', res.status))
        .then(res => {
            dispatch(deleteStorySuccess(res.data));
            window.onload = function() {
                if(!window.location.hash) {
                    window.location = window.location + '#loaded';
                    window.location.reload();
                }
            };
        })
        .catch(error => { 
            dispatch(deleteStoryFail(error))
        })
    };
};