import React from 'react'
import Footer from './Footer'

const BecomeAgent = () => {
  return (
    <>
     <div className="become-agent-div">
        <div className="agent-top-section">
            <div className="agent-top-left">
                <h2>Become a KadickMoni Agent</h2>
                <p>Please fill out the form correctly and submit it. One of our customer 
                   care representatives will attend to you immediately. <strong>Welcome on board!</strong>
                </p>
                
            </div>
            <div className="agent-top-right">
                <img src="agentpageimg.png" alt="" />
            </div>
        </div>
        <div className="agent-bottom-section">
          <section className="form-section">
            <form action=""> 
              <span>
                <input type="text" name="firstname" id="firstname" placeholder='First Name' required/>
                <input type="text" name="lastname" id="lastname" placeholder='Last Name' required/>
              </span>
              <input type="email" name="email" id="email" placeholder='Email Address' required/>
              <input type="number" name="" id="" placeholder='Phone Number ' required/>
              <input type="number" name="" id="" placeholder='Whatsapp Number' required/>
              <select name="gender" id="gender" required>
                <option value="" disabled selected>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input type="text" name="address" id="address" placeholder='Address' required/>
              <select name="state" id="state" required>
                <option value="" disabled selected>State</option>
                <option value="state">state1</option>
              </select>
              <select name="lga" id="lga" required >
                <option value="" disabled selected>LGA</option>
                <option value="lga1">LGA1</option>
              </select>
              <input type="button" value="Submit" className='submit-form'/>
            </form>
          </section>
        </div>
        <Footer />
     </div>
    </>

  )
}

export default BecomeAgent