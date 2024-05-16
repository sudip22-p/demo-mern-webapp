import React from 'react'
import {Link} from "react-router-dom"

function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">User Registration</h1>
      <form action='POST' method='/register' className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700">Full Name:</label>
          <input type="text" id="fullName" name="fullName" className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" required/>
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input type="email" id="email" name="email" className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" required/>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password:</label>
          <input type="password" id="password" name="password" className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" required/>
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" required/>
        </div>

        <input type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors cursor-pointer" value={"Register"}/>
      </form>

      <p className="mt-4">Already have an account? <Link to={"/login"}><span className="text-blue-500 hover:underline">Login</span></Link></p>
    </div>
  )
}

export default Register
