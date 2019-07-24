import React, { Component } from 'react';

import data from '../data.json';
import './ProductTable.css';
import ProductRow from './ProductRow';
import Data from '../data.json';

class productTable extends Component{
constructor(props){
  super(props)
}
  
  // props.sent
  showAllProducts =()=>{
  return this.props.state.visibleList.map(function(eachProduct, i){
    //console.log(eachProduct)

    return(
      <ProductRow 
      key = {i}
      name={eachProduct.name} 
      price= {eachProduct.price}
      />
    );
 });
   

    
 }

render(){
  console.log("product table component")
  console.log(this.state)
   return(
     <div>
       <ul className = "table">
       <li>Name</li>
       <li>Price</li>
       </ul>
      {this.showAllProducts()}
     </div>
    );

 }

}
export default productTable;