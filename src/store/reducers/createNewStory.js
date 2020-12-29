import * as actionTypes from '../actions/actionTypes';

const initialState = {
    stories: [],
    id: '',
    title: '',
    description: '',
    author: '',
    likes: null,
    created_at: '',
    user_id: '',
    body: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.POST_STORY_START:
            return {
                ...state
            }
        case actionTypes.POST_STORY_SUCCESS:
            const newStory = {
                ...action.storyData,
                id: action.storyId,
                // id: action.id,
                title: action.title,
                description: action.description,
                author: action.author,
                likes: action.likes,
                created_at: action.created_at,
                user_id: action.user_id,
                body: action.body
            }
            return {
                ...state,
                stories: state.stories.concat(newStory),
            }
        case actionTypes.POST_STORY_FAIL:
            return {
                ...state,
                error: action.error
            }
        default: return state
    }
}

export default reducer;