import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Becomeagentbody from './layout/Becomeagentbody'
import Footer from './Footer'
import Accordion from 'react-bootstrap/Accordion';


const Support = () => {
  useEffect(() => {
       AOS.init({
         duration: 800, // animation duration
         once: true     // only animate once
       });
     }, []);
  return (
    <>
      <div className="supportbody">
        <div className="supportdiv1">
          <div className="supporttext" data-aos="fade-right" >
            <h1>We are here to support you.</h1>
            <p>We know that you are the reason we are in business, so we value you. You can reach us via email, 
              phone, WhatsApp message or our ticketing system agents and get quick response to issues raised.
            </p>
            <ul>
              <li><a href="tel:+234000KADICK">Call: 08000KADICK </a></li>
              <li><a href="http://wa.me/+234000KADICK">WhatsApp: +234 (0) 8032 038 109</a></li>
              <li><a href="mailto:customercare@kadickintegrated.com">Email: customercare@kadickintegrated.com</a></li>
          </ul>
          </div>
          <div className="supportimg" data-aos="fade-left">
           <img src="/supportimg1.png" alt="" style={{width: "100%" , height: "100%"}}/>
          </div>
        </div>
        <div className="faqs">
           <div className="faqtext">
              <h2>Frequently Asked Questions.</h2>
              <p>To build a relationship with us while helping your community with cash and financial solutions.</p>
           </div>
           <div className="faq-div">
            <Accordion defaultActiveKey="" className="my-3 accordion-div" >
                <div>
                  <Accordion.Item className="accordion-item" eventKey="0" >
                    <Accordion.Header className="accordion-header" >What is Kadick Moni?</Accordion.Header>
                    <Accordion.Body className='accordion-body'>
                    To be able to carry out transactions, you will need to have a functional Android device that
                    will be synchronized with the terminal as you would be required to download the KadickMoni App to enable
                      you carry out transactions both on the App alone
                    (cash-in and other transactions) and with the mPOS(cash-out).
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item className="accordion-item" eventKey="1">
                    <Accordion.Header>How do you use Kadick Agency Banking to provide banking services?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore mollitia natus 
                      rem minima rerum consequatur iure eos, nostrum optio eligendi perspiciatis aut 
                      temporibus deleniti exercitationem itaque. Dolorem beatae quam molestias soluta quas 
                      quibusdam, adipisci neque fugit sequi sapiente recusandae Lorem, ipsum dolor.
                      cum eaque quia quod corporis? Cum cupiditate quidem officiis quod praesentium?
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className="accordion-item" eventKey="2">
                    <Accordion.Header>How do I carry out transactions on my mPOS ?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore mollitia natus 
                      rem minima rerum consequatur iure eos, nostrum optio eligendi perspiciatis aut 
                      temporibus deleniti exercitationem itaque. Dolorem beatae quam molestias soluta quas 
                      quibusdam, adipisci neque fugit sequi sapiente recusandae Lorem, ipsum dolor.
                      cum eaque quia quod corporis? Cum cupiditate quidem officiis quod praesentium?
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div>
                  <Accordion.Item className="accordion-item" eventKey="3">
                    <Accordion.Header>What is Kadick Moni?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore mollitia natus 
                      rem minima rerum consequatur iure eos, nostrum optio eligendi perspiciatis aut 
                      temporibus deleniti exercitationem itaque. Dolorem beatae quam molestias soluta quas 
                      quibusdam, adipisci neque fugit sequi sapiente recusandae Lorem, ipsum dolor.
                      cum eaque quia quod corporis? Cum cupiditate quidem officiis quod praesentium?
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className="accordion-item" eventKey="4">
                    <Accordion.Header>How do I carry out transactions on my mPOS ?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore mollitia natus 
                      rem minima rerum consequatur iure eos, nostrum optio eligendi perspiciatis aut 
                      temporibus deleniti exercitationem itaque. Dolorem beatae quam molestias soluta quas 
                      quibusdam, adipisci neque fugit sequi sapiente recusandae Lorem, ipsum dolor.
                      cum eaque quia quod corporis? Cum cupiditate quidem officiis quod praesentium?
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className="accordion-item" eventKey="5">
                    <Accordion.Header>I have an existing business location but I do not sell for cash. Can I still be an agent?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore mollitia natus 
                      rem minima rerum consequatur iure eos, nostrum optio eligendi perspiciatis aut 
                      temporibus deleniti exercitationem itaque. Dolorem beatae quam molestias soluta quas 
                      quibusdam, adipisci neque fugit sequi sapiente recusandae Lorem, ipsum dolor.
                      cum eaque quia quod corporis? Cum cupiditate quidem officiis quod praesentium?
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </Accordion>
           </div>
        </div>

        <Becomeagentbody />
        <Footer />
      </div>
    </>
  )
}

export default Support