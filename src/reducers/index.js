import {NEXT} from '../actions';

const initialState = {
  next: false
}

export default function imageReducer(state = initialState, action){
  switch(action.type){
    case NEXT:
      return Object.assign({}, state, {
        next: !state.next
      })
      default:
        return state
  }
}
