import posts from '../data/posts'
import {REMOVE_POST, ADD_POST, ADD_COMMENT} from './actions'
import {combineReducers} from 'redux'

function comments(state = {}, action) {
    switch(action.type) {
        case ADD_COMMENT:
            if(!state[action.post_id]) {
                return {...state, [action.post_id]: [action.comment]}
            }else {
                return {...state, [action.post_id]: [...state[action.post_id], action.comment]}
            }
        default: 
            return state
    }
    
}

function postReducer(state = posts, action) {
    switch(action.type) {
        case REMOVE_POST:
            let newState = state.filter(post => post !== action.post)
            return newState
        case ADD_POST:
            return [...state, action.post]
        default:
            return state
    }
}

const rootReducer = combineReducers({postReducer, comments})

export default rootReducer