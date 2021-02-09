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

export const fetchStoriesSuccess = (stories) => {
    return {
        type: actionTypes.FETCH_STORIES_SUCCESS,
        stories: stories
    };
};

export const fetchStorySuccess = (story) => {
    return {
        type: actionTypes.FETCH_STORY_SUCCESS,
        story: story
    };
};

export const postStory = (id, storyData) => {
        return dispatch => {
            dispatch(postStoryStart());
            axios.post('localhost:3000/stories')
            .then(res => {
                console.log(res.data);
                dispatch(postStorySuccess('testing post', res.data, storyData));
                // axios.get('http://localhost:3000/stories')
                // .then(res => {
                //     // console.log('first test', res.data)
                //     dispatch(fetchStoriesSuccess(res.data))
                //     }
                // )
                axios.get('http://localhost:3000/stories/' + id)
                .then(res => {
                    // console.log('single story', res.data);
                    dispatch(fetchStorySuccess(res.data))
                    }
                )
            })
            .catch(error => {
                dispatch(postStoryFail(error));
            });
        }
};


