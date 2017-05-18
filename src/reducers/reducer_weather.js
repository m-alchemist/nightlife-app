import {FETCH_BARS} from '../actions/index';

export default function(state=[], action){


  switch (action.type){
    case FETCH_BARS:
    // return state.concat([action.payload.data]);
    var array=action.payload;
    console.log('luke this is you father',array);
    return action.payload;

  }

  return state;
}
