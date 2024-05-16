// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Login from './components/Login';
import Register from './components/Register';

// import { BrowserRouter as Router, Route, Link, Routes }
//     from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Router>
          {/* //always there */}
          <Navbar/>
          <Routes>
            {/* //may be another component here */}
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
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
