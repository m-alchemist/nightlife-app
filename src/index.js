import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {Router, Route, IndexRoute,browserHistory} from 'react-router';
import {Link} from 'react-router-dom';
import requireAuth from './components/auth/require_auth';
import SearchEngine from './components/search_engine'
import App from './components/app';
import Signin from './components/auth/signIn';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import {AUTH_USER} from './actions/types';


class Hello extends Component{
  render(){
    return(<div>HELLO

      </div>
    );

  }
}
//hooking middleware is here
const createStoreWithMiddleware = applyMiddleware(reduxThunk,ReduxPromise)(createStore);
const store=createStoreWithMiddleware(reducers);
const token=localStorage.getItem('token');
//if we have a token consider the user is signed in
if(token){
    //   we need to update applcation state
    store.dispatch({type:AUTH_USER})

}


ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>

              <Route path="/" component={App}/ >

                  <Route path="/signin" component={Signin}/>
                  <Route path="/signout" component={Signout}/>
                  <Route path="/signup" component={Signup}/>
              



    </Router>

  </Provider>
  , document.querySelector('.container'));
