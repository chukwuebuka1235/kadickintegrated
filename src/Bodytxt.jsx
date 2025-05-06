import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Bodytxt = () => {
    const bodyTxt = [
        { id: "body-1", 
            h1: "Easy Transactions", 
            p: "Carrying out a financial transaction on our platform is as easy as pizza. Give it a try." },
        { id: "body-2", 
            h1: "Reliable Service", 
            p: "We improve our services regularly to always offer you the best." },
        { id: "body-3", 
            h1: "Good Customer Relation", 
            p: "We know that you are the reason we are in business, so we value you!" },
        { id: "body-4", 
            h1: "Earn & Grow with Us", 
            p: "We know that you are the reason we are in business, so we value you!" },
            { id: "body-5", 
                h1: "Earn & Grow with Us", 
                p: "We know that you are the reason we are in business, so we value you!" },
            
    ]
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
     <div className='bodydiv2' data-aos="fade-up">
        {bodyTxt.map((text) => {
            return(<div className="div2div" key={text.id} >
                <h2>{text.h1}</h2>
                <p>{text.p}</p>
                </div>
            )
        })}
     </div>
    </>
  )
}

export default Bodytxt