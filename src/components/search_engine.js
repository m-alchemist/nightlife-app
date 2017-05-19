import React,{Component} from 'react';
import SearchBar from '../containers/search_bar';
import BarList from '../containers/bar_list';


export default class SearchEngine extends Component{
  render(){

    return (
  <div>
      <div className='header-cont'>
        <div className='text-center title'>
            <div className='title2'>Nightlife  </div>
            <div className='title3 '>App  </div>
        </div>
        <SearchBar/>
      </div>



      <div className='barlist'>
        <BarList className='barlist'/>
      </div>
    </div>

)
}



}
