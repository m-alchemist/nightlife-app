import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBars} from '../actions/index';

 class SearchBar extends Component{
   constructor(props){
     super(props);
     this.state={term:'',loading:false};
     this.onInputChange= this.onInputChange.bind(this);
      this.onFormSubmit= this.onFormSubmit.bind(this);
      this.renderLoading= this.renderLoading.bind(this);
   }
   renderLoading(loading){

     if(loading){
       return (<div id='loadingIcon' className='text-xs-center '>
         <i  className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>

         </div>);
     }
      return (<div></div>);
   }
   onInputChange(event){

    this.setState({term: event.target.value})
   }
   onFormSubmit(event){

              this.setState({loading: true})

     event.preventDefault();

     // we need to make a request

     this.props.fetchBars(this.state.term,()=>{

           this.setState({loading: false})

     })




     this.setState({term: ''})
   }

  render(){
    return(
    <div>
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <div className='row ' >
        <input placeholder='Enter Your City'
      className=''
        type='text'
        value={this.state.term}
        onChange={this.onInputChange}
         />

        </div>


          <button type='submit' className='button button1' >
            SUBMIT
          </button>

          </form>
          <div  id='loadingIcon'>    { this.renderLoading(this.state.loading)  }</div>




        </div>
    );
  }
}
function mapDispatchToProps(dispatch){
  return  bindActionCreators({fetchBars},dispatch);

}
export default connect(null, mapDispatchToProps) (SearchBar)
