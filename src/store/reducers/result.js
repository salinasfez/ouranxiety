import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utility';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result * 2})});
            // //return updated state immutably
            // return {
            //     ...state,
            //     //concat returns a new array plus whatever you pass in the argument
            //     results: state.results.concat({id: new Date(), value: action.result * 2})
            // }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            //filter funs a func on each elemet in the array
            const updatedArray = state.results.filter(result => result.id !== action.resultElementId);
            return {
                ...state,
                results: updatedArray
            }
        default: return state;
    }
    
}

export default reducer;