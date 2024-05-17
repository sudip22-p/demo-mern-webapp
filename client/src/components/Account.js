import React, { useEffect, useState } from 'react'
import cookies from 'js-cookie'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
// useEffect
function Home() {
    const [name,setName]=useState('')
    const [cookieVal,setCookieVal]=useState(cookies.get('email'))
    const getUserName=async()=>{
    //asking server to return myname:
     await axios.post('http://localhost:2000/account',{
        cookieVal
        }).then(res=>{
            if(res.data==='error'){
                toast.error('Something Went Wrong 18')
                setName('N/A')
            }else{
                setName(res.data)
            }
        }).catch(error => {
            console.error(error); // Log any errors
            setName('N/A');
            toast.error('Something Went Wrong');
        });

    }
    useEffect(() => {
        getUserName();
    }, []); // Empty dependency array means this effect runs once when the component mounts
    
  const logout=()=>{
    //clear the cookie
        if(cookieVal!==undefined){
            setCookieVal(undefined)
            cookies.remove("email");
            toast.success('Successfully Logged Out')

        }
    }
    return (
            <section className="flex flex-col justify-center items-center text-grey-600 body-font h-screen">
                <h1 className='text-black text-5xl'>Hello {name}!!</h1>
                <p className="text-black text-3xl">Welcome to My Website</p>
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Kickstarter Actually Pinterest Brunch Bitters Occupy</h2>
                    <div className="md:w-3/5 md:pl-6">
                        <p className="leading-relaxed text-base">Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.</p>
                    </div>
                </div>
                <p className="text-black font-normal mt-3 mb-1">Exit from here,</p>
                    <button className="inline-flex text-blue-500 bg-white border-blue-500 border-2 py-2 px-5 focus:outline-none hover:bg-blue-500 hover:text-white rounded cursor-pointer" onClick={()=>{logout()}}>LOGOUT</button>
            </section>
    )
}

export default Home
