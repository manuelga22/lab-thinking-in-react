import React, { Component } from 'react';
import './ProductRow.css'
function productRow(props){

return(
  <ul className ="table">
  {props.stocked && <li>{props.name}</li>}
  {!props.stocked && <li id= "redProduct">{props.name}</li>}
  <li>{props.price}</li>
  </ul>
);


}

export default productRow;