import axios from "../utils/Axios";
import React, { useState, useEffect } from "react";

const Show = () => {
  const [products, setProducts] = useState([]);

  //these are getting products
  const getproducts = () => {
    const api = "/products";

    //.then we are makiing a response
    axios
      .get(api)
      .then((products) => {
        console.log(products);
        setProducts(products.data);
      })
      .catch((error) => console.error(error));
  };


  useEffect(() => {
    getproducts();
  }, []);


  return (
    <>
      <button onClick={getproducts} className="rounded px-5 py-2 bg-green-300">
        Call product apis
      </button>
      <ul className="pt-5">
        {products.length > 0 ? (
          products.map((p) => (
            <li key={p.id} className="rounded mb-2  p-5 bg-red-100">
              {p.title}
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </>
  );
};

export default Show;
