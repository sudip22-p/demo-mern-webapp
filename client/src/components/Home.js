import React from 'react'
import { Link } from "react-router-dom"

function Home() {
    return (
        <main className="flex flex-col justify-center items-center h-screen bg-white">
            <h1 className='text-black font-bold'>Hey User!!</h1>
            <p className="text-black font-semibold">Welcome to My Website</p>
            <p className="text-black font-normal mt-3 mb-1">Login to continue,</p>
            <Link to={"/login"}>
                <button className="login font-bold bg-white py-2 px-5 rounded text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-black hover:border-blue-500 cursor-pointer">LOGIN</button>
            </Link>
        </main>
    )
}

export default Home
