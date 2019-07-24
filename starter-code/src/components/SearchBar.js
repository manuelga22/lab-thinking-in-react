import React, { Component } from 'react';
import './SearchBar.css';
import Data from '../data.json';


class searchBar extends Component{
  constructor(props) {
    super(props)
  }



  render(){
    console.log(this.state)
 return(
   <div id = "search">
   <h6>Search</h6>
   <label></label>
   <input type="text" onChange = {this.props.searchBar}></input>
   </div>
 );

 }
}
export default searchBar;