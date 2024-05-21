import React, { useEffect } from 'react'

const Services = () => {
    useEffect(() => {
        console.log("service component is created")

        return () => {
            console.log("service component is deleted")
        }
    });

  return (
    <div>These are the Services</div>
  )
}

export default Services