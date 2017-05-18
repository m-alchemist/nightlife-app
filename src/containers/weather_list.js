import React, {Component} from 'react';
import {connect} from 'react-redux';


import * as actions from '../actions/auth_actions'
import {browserHistory, Link} from 'react-router';

class BarList extends Component{
  componentWillMount(){
    if(this.props.authenticated){
      this.props.fetchUserlist();
    }

  }
  onClick(id){


    if(this.props.list){
    
      if(this.props.list.indexOf(id)==-1){

    this.props.alterUserlist('add',id)
      }
      else{
        this.props.alterUserlist('remove',id)


        }
      }

      this.render();

  }

  renderButton(id){
    var btn;

      if(this.props.authenticated){

        if(this.props.list){
          var className='button button2';
          var term='0 Going';

            if(this.props.list.indexOf(id)==-1){
              className='button button2';
              term='0 Going';

            }
            else{
              className='button button1';
              term='1 Going';

            }
          }


          return (<div>

            <button onClick={this.onClick.bind(this,id)} key={id} className={className}>{term} </button>

          </div>)

        }



      else{
          return (
          btn=(<div>
          <Link to='/signin'>
          <button className='button button2'>0 Going! </button>
          </Link>
        </div>)

        )
      }
return btn;
  }
  renderBar(barData){

      const name=barData.name;
      const {latitude,longitude}=barData.coordinates;
      const image_url=barData.image_url;

    return (

    <div className='text-center in'>
      <br/>
      <div className='card card-block' key={barData.id} >
      <div className='card-head'>
          <img className='card-image' src={image_url}/>
            <p className='card-title ' > {name}</p>
          </div>
          <br/>
            <div className='text-xs-center'>
            <div className='card-button '> {this.renderButton(barData.id)}</div>
            </div>
      </div>
    </div>
    );
  }
  render(){

return(
  <div className='bar-list'>

    {this.props.bars.map(this.renderBar.bind(this))}

</div>

)

  }
}

function mapStatetoProps(state){
  return {
    bars:state.bars,
    authenticated:state.auth.authenticated,
    list:state.auth.userlist
  };

}

export default connect(mapStatetoProps,actions)(BarList);
