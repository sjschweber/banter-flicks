
import { createStore as reduxCreateStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk';

import {NEXT} from '../actions';

const initialState = {
  next: 0
}

export function imageReducer(state = initialState, action){
  switch(action.type){
    case NEXT:
      if(state.next == 2){
        state.next = 0;
        return Object.assign({}, state, {
          next: state.next
        })
      }else{
        return Object.assign({}, state, {
          next: state.next + 1
        })
      }

      default:
        return state
  }
}
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const createStore = () => reduxCreateStore(imageReducer, initialState, enhancer)
export default createStore
