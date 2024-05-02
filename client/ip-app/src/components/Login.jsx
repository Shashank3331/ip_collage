import React, { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import {Toaster,toast} from 'react-hot-toast'

function Login() {

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/')

    }
  })
  const navigate = useNavigate()

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const handleSubmit = async(eve)=>{
       eve.preventDefault();
      let fetchData = await fetch('http://localhost:3309/login',{
        method: 'post',
        body: JSON.stringify({email,password}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
       fetchData = await fetchData.json();
       if(fetchData.name){
        localStorage.setItem('user', JSON.stringify(fetchData))
        navigate('/')
        toast.success('Successfully Logged in!')
       }
       else{
        toast.error("Invalid User !")
       }
    }

  return (
    <div>


        <form onSubmit={handleSubmit} style={{width: "300px", margin: " 20vh auto"}}>
            <h2>Login Page</h2>

            <label htmlFor="">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="">Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
            <button type='submit' className='btn btn-primary mt-3'>Login</button>
        </form>
        
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  )
}

export default Login
  