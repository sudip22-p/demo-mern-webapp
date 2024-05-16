import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className='bg-slate-200 text-black-600 flex justify-end flex-col items-center'>
            <Link to={"/"}>
                <div className="logo font-bold text-red-600 py-3 px-7 cursor-pointer">Demo WebApp</div>
            </Link>
            <p className='px-7 py-5'>This is a footer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti temporibus vel dolorem sapiente ducimus, doloribus nam sit distinctio placeat quasi, aperiam itaque fuga. Non autem similique, nihil ipsam recusandae iure adipisci voluptatibus quis quasi, totam repudiandae culpa magnam commodi nostrum a. Illo deleniti reiciendis expedita fugiat, vitae eligendi ratione. </p>
            <div className="copyright font-bold text-white bg-black py-2 w-full text-center">Copyrights &copy; Demo WebApp --All rights reserved.</div>
        </footer>
    )
}

export default Footer
