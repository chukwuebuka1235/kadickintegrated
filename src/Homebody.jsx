import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonialcarousel from './layout/Testimonialcarousel.jsx'
import Bodytxt from './Bodytxt.jsx'
import Becomeagentbody from './layout/Becomeagentbody.jsx'
import Footer from './Footer.jsx'
import { NavLink , Link } from 'react-router-dom'


const Homebody = () => {
    // Initialize AOS (Animate On Scroll) library
    // This will add animation effects to elements when they come into view
    // The duration and once options can be customized as per your needs
    // duration: 800ms, once: true means the animation will only happen once when the element comes into view
useEffect(() => {
    AOS.init({
        offset: 120, // pixels before the element enters viewport
        duration: 800, // animation duration
        once: true,    // only animate once
        mirror: false // whether elements should animate out while scrolling past them
    });
  }, []);

    
  return (
    <>
    <div id="mainbody" >
        <div  className='bodydiv1'>
            <div className='div1left'>
                <section data-aos="fade-right">
                    <h1>Agency banking with the difference </h1>
                    <p>We provide you with a quick fix to all 
                        your banking troubles while building
                        a profitable relationship with you.</p>
                    <NavLink to="/getstarted"><button>Get started </button></NavLink> 
                </section>
            </div>
            <div data-aos="fade-left">
                <img src='./bodyimg1.png' style={{width:"100%" , height: "100%"}}/>
            </div>
        </div>
        <Bodytxt />
        <div className="bodydiv4" >
            <div className='div4div div4divtwo group1' data-aos="fade-right" >
                <h2>Our Application Has Amazing Features.</h2>
                <p>Kadick Moni is designed to enable you deliver stress-free financial services,
                     to your customers, from the comfort of your shop.</p>
            </div>

            <div className='group2' ></div>

            <div className='div4div div4divone group3 ' data-aos="fade-right">
                <h1>01</h1>
                <h2>Deposit & Withdrawal.</h2>
                <p>Save your community the stress of going to queue at a Bank or ATM. Become the
                     first stop of cash deposit & withdrawal in your neighborhood by using Kadick Moni.</p>
            </div>

            <div className='div4div group4' data-aos="fade-left">
                <img src="./bodyimg2.png" alt=""  />
            </div>

            <div className='div4div group5' data-aos="fade-right">
                <img src="./bodyimg3.png" alt="" />
            </div>

            <div className='div4div div4divtwo group6' data-aos="fade-left">
                <h1>02</h1>
                <h2>Bills payment</h2>
                <p>Comfortably help people in your neighbourhood to subscribe for 
                    cable tv, pay electrical bills, place bets, pay for examinations and many more.</p>
            </div>

            <div className='div4div div4divthree group7' data-aos="fade-right">
                <h1>03</h1>
                <h2>Airtime Recharge.</h2>
                <p>You can sell airtime up to N50,000 in a single transaction to any GSM network directly from our platform.</p>
            </div>

            <div className='div4div group8' data-aos="fade-left">
                <img src="./bodyimg4.png" alt="" />
            </div>

            <div className='div4div group9' data-aos="fade-right ">
                <img src="./bodyimg5.png" alt="" />
            </div>

            <div className='div4div div4divfour group10' data-aos="fade-left">
                <h1>04</h1>
                <h2>Account Opening.</h2>
                <p>You can open bank accounts of different banks for your customers with ease right from your shop.</p>
            </div>

            <div className="div4div div4divfive group11" data-aos="fade-right">
                <h1>05</h1>
                <h2>We are here to support you.</h2>
                <p>We know that you are the reason we are in business, so we value you. You can reach us via email, phone, WhatsApp message or our ticketing system agents and get quick response to issues raised.</p>
            </div>

            <div className='div4div group12' data-aos="fade-left">
                <img src="./bodyimg6.png" alt="" />
            </div>

        </div>
        <Testimonialcarousel />
        <Becomeagentbody />
        <Footer />
     </div>
    </>
  )
}

export default Homebody