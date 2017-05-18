 import React,{Component} from 'react';
 import {Link} from 'react-router';
 import {Field,  reduxForm} from 'redux-form';
 import * as actions from '../../actions/auth_actions';
 import {connect} from 'react-redux';
 import Header from '../header';
 class Signin extends Component{
   handleFormSubmit({email,password}){
     console.log(email,password)
     this.props.signinUser({email,password})

   }
   renderAlert(){

     if(this.props.errorMessage){
       return (
         <div className='aert alert-danger'>
            <strong>Oops! </strong> {this.props.errorMessage}

         </div>
       )
     }
   }
   render(){
     const {handleSubmit}=this.props


    return (
      <div>
      <div className='header-top text-xs-right'>
        <Header />

       </div>
       <div className='signinContainer'>
      <h1> Sign In </h1>
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <fieldset className='form-group'>
          <label>Email:</label>
          <Field className="form-control" name="email" component="input" type="email"/>

      </fieldset>
      <fieldset className='form-group'>
          <label>Password:</label>
          <Field className="form-control" name="password" component="input" type="password"/>

      </fieldset>
      {this.renderAlert()}
      <button action='submit' className='btn btn-primary'>
      Sign In
      </button>
     </form>
     <br/>
     <Link to='/signup'>
     <button  className='btn btn-primary'>
     Go to Sign Up
     </button>
     </Link>
     </div>
   </div>
 )}

 }
function mapStatetoProps(state){
  return {errorMessage: state.auth.error}
}
 const signinForm= reduxForm({
   form:'signin'
 },null,actions)
 (Signin)

export default connect(mapStatetoProps, actions)(signinForm);
