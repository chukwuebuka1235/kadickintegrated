import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Becomeagentbody = () => {
    useEffect(() => {
        AOS.init({
            offset: 120, // pixels before the element enters viewport
            duration: 800, // animation duration
            once: true,    // only animate once
            mirror: false 
        });
      }, []);
  return (
    <>
       <div className="become-agent-container">
            <div className="become-agent-container-div">
                <div className='become-agent-img-div' data-aos="fade-right">
                    <img src="bodyimg7.png" alt="" className='become-agent-img'/>
                </div>
                <div className="become-agent-content" data-aos="fade-left">
                    <h1>Become a KadickMoni Agent</h1>
                    <p className='become-agent-content-p'>With the KadickMoni App, you can facilitate transactions anywhere you are.
                    Click on the link below to download our requirements.
                    </p>

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
                        <a href="" className="direct-download-link" >Or click for direct download</a>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Becomeagentbody