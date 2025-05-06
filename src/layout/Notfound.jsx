import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
const navigate = useNavigate()

  return (
    <div>
        <div className="error404">
            <div className="error404img">
                <img src="error404img.png" alt="" style={{ width:"100%" , maxHeight:"700px"}} />   
            </div>
            <div className="error404text">
                <h2><span>Ooops!</span> We can't seem to find the page you're looking for.</h2>
                <button onClick={() => navigate('/')}> Go back home</button>
            </div>
        </div>
    </div>
  )
}

export default Notfound