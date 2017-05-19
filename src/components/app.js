import React, { Component } from 'react';
import Header from './header';
import {Link} from 'react-router-dom';

import SearchEngine from './search_engine'
export default class App extends Component {





  render() {



    return (

      <div>
        <div className='header-top'>
          <Header />

         </div>
       <SearchEngine/>
      </div>



    );
  }
}
