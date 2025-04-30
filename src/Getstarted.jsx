import React, { useState } from 'react'
import Arrowup from  '../public/arrowup.png'
import Arrowdown from  '../public/arrowdown.png'
import Redfooter from './Redfooter'
import Getstaredmodal from './getstartedmodal'
import { motion } from 'framer-motion';

const Getstarted = () => {
   const [ open1 , setOpen1 ] = useState(false)
   const [ open2 , setOpen2 ] = useState(false)
   const [ open3 , setOpen3 ] = useState(false)
  const [ divleft , setdivleft ] = useState("agencybanking")

  return (
    <>
       <motion.div className="get-started-body"  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <div className="get-started-left">
            <div className="dropdowns">
              <section className="dropdown1 all-dropdown"  >
                <button onClick={() => setOpen1(!open1)}>Ageny banking <span><img src={open1 ? Arrowup : Arrowdown} alt="" /></span> </button>
                 {open1 && (
                  <ul>
                  <li><button onClick={()=> setdivleft("agencybanking")}>What is Agency Banking</button></li>
                  <li><button  onClick={()=> setdivleft("onboardagent")}>Onboarding Agents</button></li>
                  <li><button>Benefit with Kadick</button></li>
                </ul>
                 )}
              </section>
              <section className="dropdown2 all-dropdown">
                <button onClick={() => setOpen2(!open2)}>Registration Process<span><img src={open2 ? Arrowup : Arrowdown} alt="" /></span> </button>
                 
              </section>
              <section className="dropdown3 all-dropdown">
                <button onClick={() => setOpen3(!open3)} >Transaction How-tos <span><img src={open3 ? Arrowup : Arrowdown} alt="" /></span> </button>
            
              </section>
            </div>
          </div>
          <div className="get-started-right">
            {divleft === "agencybanking" && (
                <div className="agency-banking">
                  <h2>What is Agency Banking?</h2>
                  <img src="getstartedimg.png" alt="" /> <br />
                  <h3>What is Agency Banking?</h3>
                  <p>Agency Banking is a financial solution that allows third party agents to perform banking 
                  transactions such as cash deposit, cash withdrawal, money transfer and utility bill payment and so much more.</p>
                  <h3>What do you need to become an agent ?</h3>
                  <p>You need a shop with an existing business, a BVN, valid Id (National ID card, Voters card,
                  International passport, or Drivers license), also utility bill alongside receipt showing your business location.</p>
                  <h3>Benefits of Being an Agent</h3>
                  <p>As a Kadick agent you are contributing to the fast growing digital banking world, you can use cash earned from your business to perform transactions with your customers which saves you the stress of going to the bank at the close of business day. Your customers can pay their utility bills, recharge their phone numbers and even open bank accounts
                    with ease; in return you earn more revenue, commissions, and become more relevant to the community financially.</p>
                </div>
            )}
            {divleft === "onboardagent" && (
                <div className="onboardagent" >
                  <h2>Onboarding Agents</h2>
                  <iframe src="https://www.youtube.com/embed/U0PNg8pBqsc"  title="modal pop video"></iframe>
                  <br />
                  <h3>How to become a Kadick Agent.</h3>
                  <p>Agency Banking is a financial solution that allows third party agents to 
                    perform banking transactions such as cash deposit, 
                    cash withdrawal, money transfer and utility bill payment and so much more.</p>
                  <h3>How to get a POS device.</h3>
                  <p>You need a shop with an existing business, a BVN, valid Id (National ID card, Voters 
                    card, International passport, or Driver’s license), also utility bill alongside receipt showing your business location.</p>
                  <h3>How to fund your Kadick wallet.</h3>
                  <p>You need a shop with an existing business, a BVN, valid Id (National ID card, Voters card, 
                    International passport, or Driver’s license), also utility bill alongside receipt showing your business location.</p>
                </div>
            )}
          </div>
       </motion.div>
       <Redfooter />
       <Getstaredmodal />
    </>
  )
}

export default Getstarted