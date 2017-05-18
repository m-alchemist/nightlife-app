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
      console.log('on click',this.props.list.indexOf(id));
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
          var className='btn btn-danger';
          var term='Ditching';
          console.log('render button',this.props.list.indexOf(id))
            if(this.props.list.indexOf(id)==-1){
              className='btn btn-danger';
              term='Ditching';

            }
            else{
              className='btn btn-primary';
              term='Going';

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
          <button className='btn btn-danger'>Ditching! </button>
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
          <img className='card-image' src={image_url}/>
            <p className='card-title ' > {name}</p>
            <br/>
            <div className='text-center'> {this.renderButton(barData.id)}</div>
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
