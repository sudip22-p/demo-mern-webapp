import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import cookies from "js-cookie"
import { ToastContainer, toast } from 'react-toastify'

// useState
// useEffect

function Navbar() {
    // //for showing and hiding the navbar--responsiveness
    // const [showMenu, setShowMenu] = useState(false)
    // //a function to reverse the showMenus value
    // const toggleMenu = () => {
    //     setShowMenu(!showMenu)//sets true if false and vice versa
    // }
    const [cookieVal,setCookieVal]=useState(cookies.get('email'))
  //check the cookie is changed or not--if yes update cookie and app too
  useEffect(()=>{
    const interval=setInterval(()=>{
      const updatedCookie=cookies.get('email')
    if(updatedCookie!==cookieVal){
      setCookieVal(updatedCookie)
    }
    },1000)
    return ()=>{clearInterval(interval)}
    
  },[cookieVal])
  const logout=()=>{
    //clear the cookie
    if(cookieVal!==undefined){
        cookies.remove("email");
        toast.success('Successfully Logged Out')
    }
  }
    return (
        <header>
            <nav className='bg-slate-200 text-black-600 flex justify-between px-7 py-5'>
                <Link to={"/"}>
                <div className="logo font-bold text-blue-500 py-2 cursor-pointer">Demo WebApp</div>
                </Link>
                <ul className='flex justify-between py-2'>
                    <Link to={"/"}>
                        <li className='mx-7 hover:text-blue-500 cursor-pointer'>Home</li>
                    </Link>
                    <Link to={"/about"}>
                        <li className='mx-7 hover:text-blue-500 cursor-pointer'>About Us</li>
                    </Link>
                    <Link to={"/service"}>
                        <li className='mx-7 hover:text-blue-500 cursor-pointer'>Services</li>
                    </Link>
                    <Link to={"/contact"}>
                        <li className='mx-7 hover:text-blue-500 cursor-pointer'>Contact Us</li>
                    </Link>
                </ul>
                {
                    cookieVal===undefined ?
                    <Link to={"/login"}>
                        <button className="login font-bold bg-white py-2 px-5 rounded text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 cursor-pointer">LOGIN</button>
                    </Link>
                    :
                    cookieVal!==undefined && 
                        <button className="login font-bold bg-white py-2 px-5 rounded text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 cursor-pointer" onClick={()=>{logout()}}>LOGOUT</button>
                }
            </nav>
        </header>
    )
}

export default Navbar
