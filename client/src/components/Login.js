import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import cookies from "js-cookie"
// useState

function Login() {
  //allows to navigate different routes programmatically within app
  const navigate=useNavigate()
  const [form,setForm]=useState({//tracking the value of form
    //initialize as null
      email:'',
      password:''
  })
  const submit= async(e)=>{
    e.preventDefault()
    try{//input verification 
      if(form.password.length<6){
      toast.error('Password must be atleast 6 character long')
    }
      else{
        try{

          await axios.post('http://localhost:2000/login',{
            form
          }).then(res=>{
            if(res.data==='noExist'){
              toast.error("User Not Exists")
            }
            else if(res.data==='invalidPassword'){
              toast.error("Incorrect Password")
            }else if(res.data==='success'){
              cookies.set("email",form.email,{expires:7})//creating cookie--expire is optional--7 represent 7 days
              toast.success("User Login Successful")
            }else{
              toast.error('Something Went Wrong')
            }
          })
        }catch(e){
            toast.error('Something Went Wrong')
        }
      }
    }catch(e){
      console.log(e);
      
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">User Login</h1>
      <form action='POST' method='/login' className="w-full max-w-md" onSubmit={submit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input type="email" id="email" name="email" className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" required value={form.email} onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}}/>
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password:</label>
          <input type="password" id="password" name="password" className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" required value={form.password} onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}}/>
        </div>
        <input type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors cursor-pointer" value={"Login"}/>
      </form>

      <p className="mt-4">Don't have an account? <Link to={"/register"}><span className="text-blue-500 hover:underline">Register</span></Link></p>
    </div>
  )
}

export default Login
