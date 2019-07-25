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
      visibleList : [...Data.data],
      inStockList: [],
      checkbox : "",
    }
  }
  setInStock=(e)=>{
    let clone = [...this.state.data];
    let filtered = clone.filter((eachProduct)=>{
      return eachProduct.stocked;
    })
    this.setState({inStockList: filtered});
  }
  searchBar=(e)=>{
    this.setInStock();
    //console.log(this.state.data);
    let clone;
    //console.log(e.target.value)   
    if(this.state.checkbox == true){
      console.log("instock",this.state.inStockList)
      clone = [...this.state.inStockList];
    }else{
      clone = [...this.state.data];
    }
    let searchTerm = e.target.value;
    this.state.searchValue = searchTerm;
    let filteredProducts = clone.filter((eachProduct)=>{
      return eachProduct.name.toUpperCase().includes(searchTerm.toUpperCase());
    });
    this.setState({visibleList: filteredProducts})
  }

  checkIfInStock=(e)=>{
    //console.log(e.target.checked)
    if(e.target.checked=== true){
      let clone = [...this.state.visibleList];
       let filteredList = clone.filter((eachFood)=>{
         return eachFood.stocked;
       })
       
       this.setState({checkbox: true});
       this.setState({visibleList: filteredList})
       
    }else{
      let clone = [...this.state.data];
      let filteredList = clone.filter((eachFood)=>{
        return eachFood.name.toUpperCase().includes(this.state.searchValue.toUpperCase());
      });
      this.setState({checkbox: false});
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