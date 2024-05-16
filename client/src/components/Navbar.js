import React from 'react'
// useState
function Navbar() {
    // //for showing and hiding the navbar--responsiveness
    // const [showMenu, setShowMenu] = useState(false)
    // //a function to reverse the showMenus value
    // const toggleMenu = () => {
    //     setShowMenu(!showMenu)//sets true if false and vice versa
    // }
    return (
        <header>
            <nav className='bg-slate-200 text-black-600 flex justify-between px-7 py-5'>
                <div className="logo font-bold text-red-600 py-2 cursor-pointer">Demo WebApp</div>
                <ul className='flex justify-between py-2'>
                    <li className='mx-7 hover:text-blue-500'>Home</li>
                    <li className='mx-7 hover:text-blue-500'>About Us</li>
                    <li className='mx-7 hover:text-blue-500'>Services</li>
                    <li className='mx-7 hover:text-blue-500'>Contact Us</li>
                </ul>
                <div>
                    <button className="login font-bold bg-white py-2 px-5 rounded text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-black hover:border-blue-500 cursor-pointer">LOGIN</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
