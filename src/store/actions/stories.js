import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const fetchStoriesStart = () => {
    return {
        type: actionTypes.FETCH_STORIES_START
    };
};

export const fetchStoriesSuccess = (stories) => {
    return {
        type: actionTypes.FETCH_STORIES_SUCCESS,
        stories: stories
    };
};

export const fetchStoriesFail = (error) => {
    return{
        type: actionTypes.FETCH_STORIES_FAIL,
        error: error
    };
};
//async

export const fetchStories = () => {
    return dispatch => {
        dispatch(fetchStoriesStart());
        axios.get('http://localhost:3000/stories')
        .then(res => {
            // console.log('first test', res.data)
         
            
            dispatch(fetchStoriesSuccess(res.data))
            }
        )
        .catch(error => {
            dispatch(fetchStoriesFail(error));
        })
    }
}
