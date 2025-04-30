import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Bodytxt = () => {
    const [ref, inView] = useInView({ triggerOnce: true });
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
  return (
    <>
     <motion.div className='bodydiv2' ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}  transition={{ duration: 0.5 }}>
        {bodyTxt.map((text) => {
            return(<motion.div className="div2div" key={text.id}>
                <h2>{text.h1}</h2>
                <p>{text.p}</p>
                </motion.div>
            )
        })}
     </motion.div>
    </>
  )
}

export default Bodytxt