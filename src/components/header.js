import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';


class Header extends Component {

  renderLinks(){

    if(this.props.authenticated){

      //show link to sign out
    return  (
      <div>

    <li className="nav-item" >
      <Link className='text-danger nav-link' to='/signout'> <p> Sign out  </p>  </Link>
        </li>

            </div>
            )
    }
    else{
     return([ <li className="nav-item" key={1}>
        <Link to='/signin' className='text-danger nav-link' > <p>Sign In</p> </Link>
      </li>,  <li className="nav-item" key={2}>
        <Link to='/signup' className=' text-danger nav-link' > <p>Sign Up</p></Link>
      </li>,])
    }
  }

  render(){
    return (
      <nav className='nav navbar-light '>
      <div className='glow2'>
        <Link to='/' className=' navbar-brand' ><i className="fa fa-home" aria-hidden="true"></i></Link>
        </div>

      <ul className="nav navbar-nav">
        {this.renderLinks()}
      </ul>
        </nav>
    )
  }
}

function mapStateToProps(state){
  return {
    authenticated:state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header)
