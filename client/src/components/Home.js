import React from 'react'

function Home() {
    return (
        <main className="flex flex-col justify-center items-center h-screen bg-blue-500">
            <h1 className='text-white font-bold'>Hey User!!</h1>
            <p className="text-white font-semibold">Welcome to My Website</p>
            <p className="text-white font-normal mt-3 mb-1">Login to continue,</p>
            <div>
                <button className="login font-bold bg-white py-2 px-5 rounded text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-black hover:border-blue-500 cursor-pointer">LOGIN</button>
            </div>
        </main>
    )
}

export default Home
