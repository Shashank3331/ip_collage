import React, { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import {Toaster,toast} from 'react-hot-toast'

function Signup() {

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  })
  const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const handleSubmit = async(eve)=>{
       eve.preventDefault();
      let fetchData = await fetch('http://localhost:3309/signup',{
        method: 'post',
        body: JSON.stringify({name,email,password}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
       fetchData = await fetchData.json();
       if(fetchData){
        localStorage.setItem('user', JSON.stringify(fetchData))
        navigate('/')
        toast.success('Successfully Signup!')
       }
       else{
        alert('Somthing went wrong')
       }
    }

  return (
    <div>

<Toaster
  position="top-center"
  reverseOrder={false}
/>
        <form onSubmit={handleSubmit} style={{width: "300px", margin: " 20vh auto"}}>
            <h2>Signup Page</h2>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <label htmlFor="">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="">Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
            <button type='submit' className='btn btn-primary mt-3'>Signup</button>
        </form>
        
    </div>
  )
}

export default Signup
  