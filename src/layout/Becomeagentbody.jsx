import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Becomeagentbody = () => {
    const [ref, inView] = useInView({
            triggerOnce: true, 
            threshold: 0.1 
        });
  return (
    <>
       <div className="become-agent-container">
            <motion.div   ref={ref}
            initial={{ opacity: 0, x: -100 }}  // Start 100px to the right
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}>
                <img src="bodyimg7.png" alt="" />
            </motion.div>
            <motion.div className="become-agent-content" ref={ref}
            initial={{ opacity: 0, x: 100 }}  // Start 100px to the left
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}>
                <h1>Become a KadickMoni Agent</h1>
                <p className='become-agent-content-p'>With the KadickMoni App, you can facilitate transactions anywhere you are.</p>

                <div className="steps-section">
                    <div className="download-requirements">
                        <a href="" className='download-requirements-link'  >  Download Requirements </a>
                    </div>
                    <div className="steps-grid">
                        <div className="step">
                            <span className="step-number"><img src="no1body.png" alt="" /></span>
                            <div className="step-text">
                                <p>Download the KadickMoni app.</p>
                            </div>
                        </div>
                        <div className="step">
                            <span className="step-number"><img src="no2body.png" alt="" /></span>
                            <div className="step-text">
                                <p>Create an account in a few minutes.</p>
                            </div>
                        </div>
                        <div className="step">
                            <span className="step-number"><img src="no3body.png" alt="" /></span>
                            <div className="step-text">
                                <p>Get a call from our representative.</p>
                            </div>
                        </div>
                        <div className="step">
                            <span className="step-number"><img src="no4body.png" alt="" /></span>
                            <div className="step-text">
                                <p>Start conducting financial services.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="download-buttons">
                    <a href="https://play.google.com/store"  target="_blank" className="google-play-button" > 
                        <img src="googleplay.png" alt="Google Play Icon" /> 
                    </a>
                    <a href="" className="direct-download-link" >  Or click for direct download  </a>
                </div>
            </motion.div>
        </div>

    </>
  )
}

export default Becomeagentbody