import {AUTH_USER,UNAUTH_USER, AUTH_ERROR,FETCH_MESSAGE,FETCH_USER_LIST} from '../actions/types';
export default function(state={},action){

  switch(action.type){

    case AUTH_ERROR:

            return {...state, error:action.payload  }
    case AUTH_USER:
      return {...state, error:"", authenticated:true  };

    case UNAUTH_USER:
      return {...state,authenticated:false  };
    case FETCH_MESSAGE:
    return{...state,message: action.payload};
    case FETCH_USER_LIST:
    return{...state,userlist:action.payload}



  }
  return state;
}
