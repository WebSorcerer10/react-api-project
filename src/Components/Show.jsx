import axios from 'axios';
import React, { useState } from 'react'

const Show = () => {
    
    const[products,setProducts] = useState([]);


    //these are getting products
    const getproducts = () => {
      const api = "https://fakestoreapi.com/products";
  
      //.then we are makiing a response
      axios
        .get(api)
        .then((products) => {
          console.log(products);
          setProducts(products.data)
        })
        .catch((error) => console.error(error));
    };
  return (
    <>
      <button onClick={getproducts} className="rounded px-5 py-2 bg-green-300">
        Call product apis
      </button>
    <ul>
        {products.length>0 ? products.map( p => 
        <li key={p.id} className="rounded mb-2  p-5 bg-red-100">
          {p.title}
        </li>
        ):<h1>Loading...</h1>}
    </ul>        
    
    </>
    
  )
}

export default Show