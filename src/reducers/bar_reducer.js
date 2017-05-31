import {FETCH_BARS} from '../actions/index';

export default function(state=[], action){


  switch (action.type){
    case FETCH_BARS:
    // return state.concat([action.payload.data]);
    var array=action.payload;
  
    return action.payload;

  }

  return state;
}
