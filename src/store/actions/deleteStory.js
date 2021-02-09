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

export const fetchStoriesSuccess = (stories) => {
    return {
        type: actionTypes.FETCH_STORIES_SUCCESS,
        stories: stories
    };
};

export const deleteStory = (id, data) => {
    return dispatch => {
        dispatch(deleteStoryStart());
        axios.delete('http://localhost:3000/stories/' + id, data)
        // .then(res => console.log('where is my data', res.status))
        .then(res => {
            dispatch(deleteStorySuccess(res.data))
        // I need to get all posts in order for my page to update the state without the deleted posts
            axios.get('http://localhost:3000/stories')
            .then(res => {
                // console.log('first test', res.data)
             
                
                dispatch(fetchStoriesSuccess(res.data))
                }
            )
        })
        .catch(error => { 
            dispatch(deleteStoryFail(error))
        })
    };
};