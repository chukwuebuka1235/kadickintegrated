import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';



const Navbar = () => {
  const [show, setShow] = useState(false);
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
     <section className='hamburger-div '>
        <div className="hamburger-logo-div">
          <img src="./logo.png" /> 
          <button onClick={handleShow}>  {show ? "X" : "☰"}</button>

          { show === true && (
              <div className='hamburger-body'>
                <ul>
                    <li key='home'><NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink></li>
                    <li key="getstarted"><NavLink to="/getstarted" className={({isActive}) => (isActive ? "active" : "")}>Get Started</NavLink></li>
                    <li key="support"><NavLink to="/support" className={({isActive}) => (isActive ? "active" : "")}>Support</NavLink></li>
                    <li key="ourstory"><a target="_blank" rel="noreferrer" href="https://kadickintegrated.com">Our Story</a></li>
                </ul>
                <div className='hamburger-btn-div'>
                  <button className='hamburger-btn' onClick={() => navigate('/becomeagent')}>Become an Agent</button> 
                </div>
              </div>
            )}
        </div>
     </section>
    </>
  )
}

export default Navbar