import React, { Component } from 'react';

function productRow(props){
  
return(
  <ul className ="table">
  <li>{props.name}</li>
  <li>{props.price}</li>
  </ul>
);


}

export default productRow;