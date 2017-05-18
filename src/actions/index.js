

import $ from "jquery";
export const FETCH_BARS='FETCH_BARS';
import axios from 'axios';
const CLIENT_ID='aLbrRLCPA2jgvDqfZH0NgQ';
const CLIENT_SECRET='2nqGnNfItOw9JzWH9GSjqwP1bx4gbDPemiCFN1b4pgDnrqmP8irDN6FHpg2POTGb';
const URL=`https://api.yelp.com/oauth2/token?grant_type=OAuth2&client_secret=${CLIENT_SECRET}&client_id=${CLIENT_ID}`;
const TOKEN="hnw9gOB2JQqM_VCYpxTQ6qthA1MbvXUiAdiK-m7u4Hearv0dguzWRIA_xAevAYNYuAGFlcozsbiLUnQmpn6Yq97MmVlcnZIUAViDrLV8aIw23juZPN7OS1r5JXcTWXYx";
var proxy = 'https://cors-anywhere.herokuapp.com/';

var finalURL = proxy + URL;


export function fetchBars(city,callback){

    var request=getBarList(city)
    .then((data)=>{
      callback();
      return data;
    })

    return{
      type: FETCH_BARS,
      payload:request

    }




}

function getBarList(city){
  var array=[];


    function setHeader(xhr) {

      xhr.setRequestHeader('token','');
    }
    const URL2=`https://api.yelp.com/v3/businesses/search?term=bars&location=${city}`;
    var finalURL2 = proxy + URL2


    return array=axios.post(finalURL)
    .then((results)=>{
      var array=[];
      console.log(results.data.access_token);


      const AuthStr = 'Bearer '.concat(results.data.access_token);
      console.log('ready',AuthStr );
      return array=axios.get(finalURL2, { headers: { Authorization: AuthStr } })
      .then(response => {
        // If request is good...
        var request=response.data;
        console.log(request);
        return request;
      })
      .then((data)=>{
        console.log('yes',data);
        return array=data.businesses;

      })




    })



}
