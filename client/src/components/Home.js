import React from 'react'
import { Link } from "react-router-dom"

function Home() {
    return (
            <section className="flex flex-col justify-center items-center text-grey-600 body-font h-screen">
                <h1 className='text-black text-5xl'>Hello User!!</h1>
                <p className="text-black text-3xl">Welcome to Demo MERN App</p>
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Kickstarter Actually Pinterest Brunch Bitters Occupy</h2>
                    <div className="md:w-3/5 md:pl-6">
                        <p className="leading-relaxed text-base">Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.</p>
                    </div>
                </div>
                <p className="text-black font-normal mt-3 mb-1">Login to continue,</p>
                <Link to={"/login"}>
                    <button className="inline-flex text-blue-500 bg-white border-blue-500 border-2 py-2 px-5 focus:outline-none hover:bg-blue-500 hover:text-white rounded cursor-pointer">LOGIN</button>
                </Link>
            </section>
    )
}

export default Home
