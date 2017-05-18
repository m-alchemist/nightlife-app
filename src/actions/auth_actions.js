import axios from 'axios';
import {AUTH_USER,UNAUTH_USER,AUTH_ERROR,FETCH_MESSAGE,FETCH_USER_LIST} from './types';
import {browserHistory} from 'react-router';

const ROOT_URL='http://localhost:3090';


export function signinUser({email,password}){
  return function(dispatch){

      //Submit email/password to server

    axios.post(`${ROOT_URL}/signin`,{email,password})
    .then(response=>{
      //if request is good
      //updat state to indicate user is authenticated
      //save the jwt token
      //-redirect to the route '/feature'
      dispatch({type:AUTH_USER})
      console.log(response.data.token)
      localStorage.setItem('token',response.data.token)
      browserHistory.push('/')

    })
    .catch(()=>{

        //if request
        //show error to user

        dispatch(authError('Incorrect email or password'))

    })


  }

}

export function signupUser({email,password}){
  return function(dispatch){

      //Submit email/password to server

    axios.post(`${ROOT_URL}/signup`,{email,password})
    .then(response=>{
      dispatch({type:AUTH_USER})
      localStorage.setItem('token',response.data.token)
      browserHistory.push('/')
    })
    .catch(response=>  dispatch(authError(' Email Exists')))



  }

}



export function authError(error){

  return{
    type: AUTH_ERROR,
    payload:error
  }
}
export function signoutUser(){
    localStorage.removeItem('token');

  return{type:UNAUTH_USER}
}

export function fetchMessage(){
  return function(dispatch){
    axios.get(`${ROOT_URL}`,{
      headers:{authorization:localStorage.getItem('token')}
    })
    .then(response=>{
      console.log(response)
      dispatch({
        type:FETCH_MESSAGE,
        payload:response.data.message
      })
    })
  }
}
export function fetchUserlist(){
  return function(dispatch){
    axios.get(`${ROOT_URL}/userlist`,{
      headers:{authorization:localStorage.getItem('token')}
    })
    .then(response=>{
      console.log(response.data.list)
      dispatch({
        type:FETCH_USER_LIST,
        payload:response.data.list
      })
    })


  }
}
  export function alterUserlist(type,item){
    return function(dispatch){

        //Submit email/password to server

      axios.post(`${ROOT_URL}/alteruserlist`,{type,item},{
        headers:{authorization:localStorage.getItem('token')}})
      .then(response=>{
        console.log(response.data.list)
        dispatch({
          type:FETCH_USER_LIST,
          payload:response.data.list})

      })

    }

  }
