import React, { useState } from 'react'
import './style.css'

function Course() {
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [duration,setDuration] = useState('')
    const [error,setError] = useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault();
    if(!name || !price || !duration){
        setError(true)
        return false
    }
       
        console.log({name,price,duration})
      let addData = await fetch('http://localhost:3309/product',{
        method : 'post',
        body: JSON.stringify({name,price,duration}),
        headers: {
            'Content-Type': 'application/json'
        }
      }) 
        addData = await addData.json();
        if(addData){
            alert('Product is added successfully');
        }
        else{
            alert("Somthing went wrong")
        }
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Course Name</label>
        <select value={name} onChange={(e)=>setName(e.target.value)}>
            <option value="">Select Course</option>
            <option value="JFS">Java Full stack</option>
            <option value="mern-stack">MERN-STACK</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <option value="PFS">Python Full stack</option>
        </select>
        {error && !price && <span style={{margin: "10px"}}>Please fill out this field</span>}
        <input type="tel" placeholder='Please Enter Course Price' value={price} onChange={(e)=>setPrice(e.target.value)} />
        {error && !duration && <span style={{margin: "10px",color: "red"}}>Please fill out this field</span>}
        <input type="tel" placeholder='Please Enter Course Duration' value={duration} onChange={(e)=>setDuration(e.target.value)} />
        <button type='submit'>Add Course</button>
      </form>
    </div>
  )
}

export default Course
