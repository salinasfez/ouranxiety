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
            // const deletedItem = state.stories.slice(0, index).slice(index + 1)
            // return {
            //     ...state,
            //     id: action.id,
            //     data: action.data,
            //     stories:  deletedItem
            // }
            // return {
            //     ...state,
            //     stories: [...state.stories.filter(story => story !== action.payload)]
            // }
          return {
              ...state,
              stories: state.stories
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