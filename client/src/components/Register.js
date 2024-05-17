import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import cookies from "js-cookie"
// useState

function Register() {
  //allows to navigate different routes programmatically within app
  const navigate=useNavigate()
  const [form,setForm]=useState({//tracking the value of form
    //initialize as null
      fullName:'',
      email:'',
      password:'',
      confirmPassword:''
  })
  const submit= async(e)=>{
    e.preventDefault()
    try{//input verification 
      if(form.password.length<6){
      toast.error('Password must be atleast 6 character long')
    }
      else if(form.password!==form.confirmPassword){
        toast.error('Passwords donot match')
      }
      else{
          await axios.post('http://localhost:2000/register',{
            form
          }).then(res=>{
            if(res.data==='exist'){
              toast.error("Email Already Exists")
            }else if(res.data==='success'){
              cookies.set("email",form.email,{expires:7})
              toast.success("User Registration Successful")
            }else{
            toast.error('Something Went Wrong')
          }
        }).catch(error => {
          console.error(error); 
          toast.error('Something Went Wrong');
      });
      }
    }catch(e){
      console.log(e);
      
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">User Registration</h1>
      <form action='POST' method='/register' className="w-full max-w-md" onSubmit={submit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700">Full Name:</label>
          <input type="text" id="fullName" name="fullName" className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" required value={form.fullName} onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}}/>
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input type="email" id="email" name="email" className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" required value={form.email} onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}}/>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password:</label>
          <input type="password" id="password" name="password" className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" required value={form.password} onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}}/>
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" required value={form.confirmPassword} onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}}/>
        </div>

        <input type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors cursor-pointer" value={"Register"}/>
      </form>

      <p className="mt-4">Already have an account? <Link to={"/login"}><span className="text-blue-500 hover:underline">Login</span></Link></p>
    </div>
  )
}

export default Register
