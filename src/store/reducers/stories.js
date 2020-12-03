import * as actionTypes from '../actions/actionTypes';

const initialState = {
    stories: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_STORIES_START:
            return state;
        case actionTypes.FETCH_STORIES_SUCCESS:
            return {
                ...state,
                stories: action.stories
            }
        case actionTypes.FETCH_STORIES_FAIL:
            return state;
        default: return state;
    }
}

export default reducer;