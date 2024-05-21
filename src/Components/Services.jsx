import React, { useEffect, useState } from 'react'

const Services = () => {

  const [first,setFirst] = useState("this is normal data");
  const [second,setSecond] = useState("this is very large data");
  

    useEffect(() => {
        console.log("service component is created")

        return () => {
            console.log("service component is deleted")
        }
    });

  return (
    <div>
    <h1> {first} </h1>
    <button>change normal data</button>
    </div>
  )
}

export default Services