// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
          </Routes>
          {/* //footer always there */}
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
