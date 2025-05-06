import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Navbar = () => {
  const [show, setShow] = useState(false);
    useEffect(() => {
      AOS.init({
        duration: 500, // animation duration
        once: true     // only animate once
      });
    }, []);
  

  const handleShow = () => setShow(!show);
  const navigate = useNavigate()
  return (
    <>
     <section id="nav-bar">
        <div className="nav-div">
          <div className='nav-left'>
              <img src="./logo.png" />       
          </div>
          <div className='nav-mid'>
              <ul>
                  <li key='home'><NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink></li>
                  <li key="getstarted"><NavLink to="/getstarted" className={({isActive}) => (isActive ? "active" : "")}>Get Started</NavLink></li>
                  <li key="support"><NavLink to="/support" className={({isActive}) => (isActive ? "active" : "")}>Support</NavLink></li>
                  <li key="ourstory"><a target="_blank" rel="noreferrer" href="https://kadickintegrated.com">Our Story</a></li>
              </ul>
          </div>
          <div className='nav-right'>
              <button className='agent-btn' onClick={() => navigate('/becomeagent')}>Become an Agent</button> 
          </div>
        </div>
     </section>
     <section className='hamburger-div'>
        <div className="hamburger-logo-div">
          <div><img src="./logo.png" /></div>
          <div> <button onClick={handleShow}>  {show ? "X" : "☰"}</button></div>
        </div>

        <div>
            { show === true && (
              <div className='hamburger-body' data-aos="fade-right">
                <ul>
                    <li key='home'><NavLink to="/" className={({isActive}) => (isActive ? "active" : "")} onClick={() => setShow()}>Home</NavLink></li>
                    <li key="getstarted"><NavLink to="/getstarted" className={({isActive}) => (isActive ? "active" : "")} onClick={() => setShow()}>Get Started</NavLink></li>
                    <li key="support"><NavLink to="/support" className={({isActive}) => (isActive ? "active" : "")} onClick={() => setShow()}>Support</NavLink></li>
                    <li key="ourstory"><a target="_blank" rel="noreferrer" href="https://kadickintegrated.com" onClick={() => setShow()}>Our Story</a></li>
                </ul>
                <div className='hamburger-btn-div'>
                  <button className='hamburger-btn' onClick={() =>{
                     navigate('/becomeagent') ;
                      setShow()
                    }}>Become an Agent</button> 
                </div>
              </div>
            )}
          </div>
     </section>
    </>
  )
}

export default Navbar