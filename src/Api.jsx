import React, { useState } from 'react';
import axios from 'axios';

function Api() {
    const [prodcuts, setProducts] = useState([]);

    const getproducts = () => {
        console.log('I am clicked');
        const api = "https://fakestoreapi.com/products";
        
        axios
        .get(api)
        .then((products) => {   
            setProducts(products.data)
            // console.log(response.data);
        })
        .catch((err) => console.log(err));
    };
    
    //adding products through apis
    const addproducts = () => {
        console.log('I am clicked')
        const api = "https://fakestoreapi.com/products";
        axios
        .post(api , {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        })
        .then((res) => {
           console.log(res)
        })
        .catch((err) => console.log(err));
    };
    
        console.log(prodcuts)
          return (
    <div className="pt-[5%] pl-[5%]">
        <button onClick={getproducts} className="rounded px-5 py-2 bg-green-300">
          Call product apis
        </button>
        <br />
        <br />
        <button onClick={addproducts} className="rounded px-5 py-2 bg-green-300">
          Save new product in api 
        </button>
        <hr className="my-10" />
        <ul>
               
                    <li  className="w-1/4 p-5 bg-red-200 rounded">
                        {product.title}
                    </li>
            
            </ul>
      </div>  
          )
}

export default Api;