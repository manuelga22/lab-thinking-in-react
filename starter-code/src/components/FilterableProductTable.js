import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import Data from '../data.json';

class productTable extends Component{
  constructor(props) {
    super(props)
    this.state = {
      searchValue : "",
      data: [...Data.data],
      visibleList : [...Data.data]
    }
  }

  searchBar=(e)=>{
    //console.log(this.state.data);
    console.log(e.target.value)
    let clone = [...this.state.data];
    let searchTerm = e.target.value;
    this.state.searchValue = searchTerm;
    let filteredList = clone.filter((eachFood)=>{
      return eachFood.name.toUpperCase().includes(searchTerm.toUpperCase());
    });
    this.setState({visibleList: filteredList})
  }

  checkIfInStock=(e)=>{
    //console.log(e.target.checked)
    if(e.target.checked=== true){
      let clone = [...this.state.visibleList];
       let inStockList = clone.filter((eachFood)=>{
         return eachFood.stocked;
       })
       
       this.setState({visibleList: inStockList})
       console.log("ccc", inStockList)
    }else{
      let clone = [...this.state.data];
 
      let filteredList = clone.filter((eachFood)=>{
        return eachFood.name.toUpperCase().includes(this.state.searchValue.toUpperCase());
      });
      this.setState({visibleList: filteredList})
    }
  }

  render(){
  return(
    <div id = "Table">
        <h3>IronStore</h3>
        <SearchBar state = {this.state} searchBar = {this.searchBar} displayInStock = {this.checkIfInStock}/>
        <ProductTable state = {this.state}/>
    </div>
  );
  }


}
export default productTable;