import React, { useEffect, useState } from "react";
import axios from "../utils/Axios";

const Services = () => {
  const [first, setFirst] = useState("this is normal data");
  const [second, setSecond] = useState("this is very large data");

  //these are getting products
  const getusers = () => {
    const api = "/users";

    //.then we are makiing a response
    axios
      .get(api)
      .then((users) => {
        console.log(users);
        
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getusers();
    console.log("service component is created");

    return () => {
      console.log("service component is deleted");
    };
  },[second]);
  //this square bracket does not allow component rerendering
  //this [] controls rerendering or updation

  //if we write any state variable inside them[]
  //then the whole component will be updated on changing
  //that particular state

    

  return (
    <div>
      <h1> {first} </h1>
      <button
        onClick={() => setFirst("Normal data has been changed")}
        className="rounded bg-red-200 p-2 mb-10"
      >
        change normal data
      </button>
      <h1> {second} </h1>
      <button
        onClick={() => setSecond("Large data has been changed")}
        className="rounded bg-blue-200 p-2 mb-10"
      >
        change large data
      </button>
    </div>
  );
};

export default Services;
