import React from 'react'
import {Link} from "react-router-dom"

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">User Login</h1>
      <form action='POST' method='/login' className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input type="email" id="email" name="email" className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" required/>
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password:</label>
          <input type="password" id="password" name="password" className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" required/>
        </div>
        <input type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors cursor-pointer" value={"Login"}/>
      </form>

      <p className="mt-4">Don't have an account? <Link to={"/register"}><span className="text-blue-500 hover:underline">Register</span></Link></p>
    </div>
  )
}

export default Login
