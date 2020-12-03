import * as actionTypes from '../actions/actionTypes';


const initialState = {
    story: {},
    id: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_STORY_START:
            return state;
        case actionTypes.FETCH_STORY_SUCCESS:
            return {
                ...state,
                story: action.story,
                id: action.id
            }
        case actionTypes.FETCH_STORY_FAIL:
            return {
                ...state,
                error: action.error
            }
        default: return state;
    }
}

export default reducer;