import * as actionTypes from '../actions/actionTypes';

const initialState = {
    stories: []
}

const reducer = (state = initialState, action, index) => {
    switch (action.type) {
        case actionTypes.DELETE_STORY_START:
            return {
            ...state
        }
        case actionTypes.DELETE_STORY_SUCCESS:
            return {
                ...state,
                stories:  state.stories.slice(0, index).slice(index + 1)
            }
        case actionTypes.FETCH_STORIES_FAIL:
            return {
                ...state,
                error: action.error
            }
        default: return state
    }
}

export default reducer;