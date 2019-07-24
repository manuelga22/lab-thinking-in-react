import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import Data from '../data.json';

class productTable extends Component{
  constructor(props) {
    super(props)
    this.state = {
      data: [...Data.data],
      visibleList : [...Data.data]
    }
  }

  searchBar=(e)=>{
    //console.log(this.state.data);
    console.log(e.target.value)
    let clone = [...this.state.data];
    let searchTerm = e.target.value;
    let filteredList = clone.filter((eachFood)=>{
      return eachFood.name.toUpperCase().includes(searchTerm.toUpperCase());
    });
    this.setState({visibleList: filteredList})
  }

  render(){
  return(
    <div id = "Table">
        <h3>IronStore</h3>
        <SearchBar state = {this.state} searchBar = {this.searchBar}/>
        <ProductTable state = {this.state}/>
    </div>
  );
  }


}
export default productTable;