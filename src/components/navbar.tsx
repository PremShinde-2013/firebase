import React from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../config/firebase'
import {useAuthState} from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth'
const Navbar = () => {
    const [user] = useAuthState(auth)
    const signUserOut =async()=>{
        await signOut(auth)


    }
  return (
    <div>
        <Link to="/" >Home</Link>
        <Link to="/login" >Login</Link>
        <div>
            {user &&
            <>
            <p>{auth.currentUser?.displayName}</p>
            <img src={auth.currentUser?.photoURL || ""} alt="photo" width="100" height="100"  />
       <button onClick={signUserOut}>Log Out </button>
            </>
            }
        </div>
    </div>
  )
}

export default Navbar