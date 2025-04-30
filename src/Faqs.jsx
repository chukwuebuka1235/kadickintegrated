import { useState } from 'react';
import { NavLink } from 'react-router-dom'

function Faqs() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <>
      <div className="hamburger-div">
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
    </>
  );
}

export default Faqs;