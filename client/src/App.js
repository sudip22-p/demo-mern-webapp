// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import cookies from "js-cookie"
import { useEffect, useState } from "react";


// import { BrowserRouter as Router, Route, Link, Routes }
//     from "react-router-dom";
function App() {
  const [cookieVal,setCookieVal]=useState(cookies.get('email'))
  //check the cookie is changed or not--if yes update cookie and app too
  useEffect(()=>{
    const interval=setInterval(()=>{
      const updatedCookie=cookies.get('email')
    if(updatedCookie!==cookieVal){
      setCookieVal(updatedCookie)
    }
    },1000)
    return ()=>{clearInterval(interval)}
    
  },[cookieVal])
  return (
    <div className="App">
        <ToastContainer />
        <Router>
          {/* //always there */}
          <Navbar/>
          <Routes>
            {/* //may be another component here */}
            {cookieVal===undefined && <Route path='/' element={<Home/>}/>}
            {cookieVal!==undefined && <Route path='/' element={<Account/>}/>}

            {cookieVal===undefined && <Route path='/login' element={<Login/>}/>}
            {cookieVal!==undefined && <Route path='/login' element={<Account/>}/>}

            {cookieVal===undefined && <Route path='/register' element={<Register/>}/>}
            {cookieVal!==undefined && <Route path='/register' element={<Account/>}/>}
            
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          {/* //footer always there */}
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
