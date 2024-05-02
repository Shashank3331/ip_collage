
import {Link, useNavigate} from 'react-router-dom'
import './style.css'

import { Toaster,toast } from 'react-hot-toast'



function NavBar() {
  const navigate = useNavigate()
  const auth = localStorage.getItem('user')
  const handleLogout =()=>{
    localStorage.clear();
   navigate('signup')
   toast.error("Logged out")
  } 
  return (
     <>
       {auth ? <>
        <Link className='nav' to='/'>Home</Link>
     <Link className='nav' to='/about'>About</Link>
     <Link className='nav' to='/notice'>Notice</Link>
     <Link to='signup' onClick={handleLogout}>Logout</Link>
       </>
      :
     <>
      <Link className='nav' to='/signup'>Signup</Link>
      <Link className='nav' to='/login'>Login</Link>
     </>
      }

<Toaster
             position="top-center"
             reverseOrder={false}
           />
     </>
        
  );
}

export default NavBar;