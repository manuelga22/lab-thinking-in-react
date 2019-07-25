import React, { Component } from 'react';
import './SearchBar.css';
import Data from '../data.json';


class searchBar extends Component{
  constructor(props) {
    super(props)
  }



  render(){
    //console.log(this.state)
 return(
   <div id = "search">
   <h6>Search</h6>
   <label></label>
   <input type="text" onChange = {this.props.searchBar}></input>
   <input type="checkbox" onChange = {this.props.displayInStock}/> Only products in stock<br/>
   </div>
 );

 }
}
export default searchBar;