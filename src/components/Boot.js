import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


const Boot = () => {
   
    const[colour,setColour]= useState("green");
    const[count,setCount]=useState(0)

    const msg=()=>{
        setColour("red")
    }
   
     const inc=()=>{
        setCount(count+1)
     }

     const dec=()=>{
        setCount(count-1)
     }



   


  return (
    <>
    <h1 style={{color:colour}}>Enthadaa machuuu</h1>
    <Button variant="warning" onClick={msg}>Warning</Button>
    <br />
    <br />
      <h1>counter is {count}</h1>
      <Button  onClick={inc} className='m-2 bg-sucess'>+</Button>
      <Button  onClick={dec}   className='m-2 bg-danger' >-</Button>

    </>
  )
}

export default Boot