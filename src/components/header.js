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
      <Link className='text-danger nav-link' to='/signout'>  Sign out    </Link>
        </li>

            </div>
            )
    }
    else{
     return([ <li className="nav-item" key={1}>
        <Link to='/signin' className='text-danger nav-link' > Sign In</Link>
      </li>,  <li className="nav-item" key={2}>
        <Link to='/signup' className=' text-danger nav-link' > Sign Up</Link>
      </li>,])
    }
  }

  render(){
    return (
      <nav className='nav navbar-light'>
        <Link to='/' className='text-danger navbar-brand' > Home</Link>


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
