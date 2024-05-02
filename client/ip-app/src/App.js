import React from 'react'
import Home from './components/Home'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Signup from './components/Signup'
import PrivatePortal from './components/PrivatePortal'
import Login from './components/Login'
import Course from './components/Course'
import GetData from './components/GetData'


function App() {
  return (
    <div>
       <BrowserRouter>
       <NavBar/>
       <Routes>
       <Route element={<PrivatePortal/>}>
       <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<Course/>}></Route>
        <Route path='/notice' element={<GetData/>}></Route>
       </Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
       </Routes>
       <Footer/>
       </BrowserRouter>
    </div>
  )
}

export default App
