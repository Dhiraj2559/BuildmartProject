import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import AboutUs from './project/about';
import Privacypolicy from './project/policy';
import TermsAndconditions from './project/terms';
import FAQS from './project/faq';
import Login from './project/login';
import UpdatePassword from './project/pass';
import Home from './project/home';
import { useSelector } from 'react-redux';
import LogoutComp from './project/LogoutComp';
import First from './project/first';
import Register from './project/regstration';


function App() {
  const mystate = useSelector(state=> state.logged)
  return (
    <div className='App'>
      <header>
       
  <div style={{display: mystate.loggedIn?"none":"block"}}>
<ul className='nav navbar '>
            <li className='nav-item' style={{marginLeft:"1200px"}}><Link to="/loginpage">Login</Link></li>
            <li className='nav-item' style={{ marginLeft:"10px"}}><Link to="/regstration">Register</Link></li>
            <li className='nav-item' style={{ marginLeft:"10px"}}><Link to="/updatePass">Update Password</Link></li>

</ul>
            <h1 className='text-danger'>BUILDMART</h1>
            <h3 className='text-info'>Smart Building Material Management Website</h3>
                <ul className='nav navbar bg-dark '>
                        <li className='nav-item' style={{marginLeft:100}}><Link to="/aboutus">About us</Link></li>
                        <li className='nav-item'><Link to="/termsandconditions">Terms and Conditions</Link></li>
                        <li className='nav-item'><Link to="/privacypolicy">Privacy Policy</Link></li>
                        <li className='nav-item' style={{marginRight:100}}><Link to="/faqs">FAQS</Link></li>
                </ul>
</div>
           

      <Routes>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/termsandconditions" element={<TermsAndconditions />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/faqs" element={<FAQS/>} />
          <Route path="/loginpage" element={<Login />} />
          <Route path="/regstration" element={<Register />} />
          <Route path="/updatePass" element={<UpdatePassword />} />
          <Route path="/home" element={<Home />} >
          <Route path="logout" element={<LogoutComp/>} />
          </Route>
          <Route path="/" element={<First />} />
      </Routes>
     
      </header>
    </div>
  );
}

export default App;
