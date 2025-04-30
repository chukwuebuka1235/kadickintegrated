import React from 'react'
import Testimonialcarousel from './layout/Testimonialcarousel.jsx'
import Bodytxt from './Bodytxt.jsx'
import Becomeagentbody from './layout/Becomeagentbody.jsx'
import Footer from './Footer.jsx'
import { NavLink , Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Homebody = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.1 
    });
    const navigate = useNavigate()
  return (
    <>
    <motion.div id="mainbody" ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
        <motion.div  className='bodydiv1' ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}  transition={{ duration: 0.5 }}>
            <div className='div1left'>
                <section>
                    <h1>Agency banking with the difference </h1>
                    <p>We provide you with a quick fix to all 
                        your banking troubles while building
                        a profitable relationship with you.</p>
                    <NavLink to="/getstarted"><button>Get started </button></NavLink> 
                </section>
            </div>
            <div>
            <img src='./bodyimg1.png' style={{width:"100%"}}/>
            </div>
        </motion.div>
        <Bodytxt />
        <div className="bodydiv4" >
            <motion.div className='div4div div4divtwo' ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}  transition={{ duration: 0.5 }}>
                <h2>Our Application Has Amazing Features.</h2>
                <p>Kadick Moni is designed to enable you deliver stress-free financial services,
                     to your customers, from the comfort of your shop.</p>
            </motion.div>
            <div></div>
            <motion.div className='div4div div4divone' ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}  transition={{ duration: 0.5 }}>
                <h1>01</h1>
                <h2>Deposit & Withdrawal.</h2>
                <p>Save your community the stress of going to queue at a Bank or ATM. Become the
                     first stop of cash deposit & withdrawal in your neighborhood by using Kadick Moni.</p>
            </motion.div>
            <motion.div className='div4div' ref={ref}
            initial={{ opacity: 0, x: 100 }}  // Start 100px to the right
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}>
                <img src="./bodyimg2.png" alt="" />
            </motion.div>
            <motion.div className='div4div' ref={ref}
            initial={{ opacity: 0, x: -100 }}  // Start 100px to the right
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}>
                <img src="./bodyimg3.png" alt="" />
            </motion.div>
            <motion.div className='div4div div4divtwo' ref={ref}
            initial={{ opacity: 0, x: 100 }}  // Start 100px to the right
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}>
                <h1>02</h1>
                <h2>Bills payment</h2>
                <p>Comfortably help people in your neighbourhood to subscribe for 
                    cable tv, pay electrical bills, place bets, pay for examinations and many more.</p>
            </motion.div>
            <motion.div className='div4div div4divthree' ref={ref}
            initial={{ opacity: 0, x: -100 }}  // Start 100px to the right
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}>
                <h1>03</h1>
                <h2>Airtime Recharge.</h2>
                <p>You can sell airtime up to N50,000 in a single transaction to any GSM network directly from our platform.</p>
            </motion.div>
            <motion.div className='div4div' ref={ref}
            initial={{ opacity: 0, x: 100 }}  // Start 100px to the right
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}>
                <img src="./bodyimg4.png" alt="" />
            </motion.div>
            <motion.div className='div4div' ref={ref}
            initial={{ opacity: 0, x: -100 }}  // Start 100px to the right
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}>
                <img src="./bodyimg5.png" alt="" />
            </motion.div>
            <motion.div className='div4div div4divfour' ref={ref}
            initial={{ opacity: 0, x: 100 }}  // Start 100px to the right
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}>
                <h1>04</h1>
                <h2>Account Opening.</h2>
                <p>You can open bank accounts of different banks for your customers with ease right from your shop.</p>
            </motion.div>
            <motion.div className="div4div div4divfive" ref={ref}
            initial={{ opacity: 0, x: -100 }}  // Start 100px to the right
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}>
                <h1>05</h1>
                <h2>We are here to support you.</h2>
                <p>We know that you are the reason we are in business, so we value you. You can reach us via email, phone, WhatsApp message or our ticketing system agents and get quick response to issues raised.</p>
            </motion.div>
            <motion.div className='div4div' ref={ref}
            initial={{ opacity: 0, x: 100 }}  // Start 100px to the right
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}>
                <img src="./bodyimg6.png" alt="" />
            </motion.div>
        </div>
        <Testimonialcarousel />
        <Becomeagentbody />
        <Footer />
     </motion.div>
    </>
  )
}

export default Homebody