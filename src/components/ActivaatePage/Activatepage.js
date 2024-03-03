import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './activate.css';


const Activatepage = () => {
    const [activateData, setActivateData] = useState(null);
const fetchActivate=async()=>{
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
        const response = await axios.get(`${apiUrl}/api/v2/activate`)
        setActivateData(response.data);        
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
    fetchActivate()
})

const redirect = ()=>{
window.location.href="/User/Login"
}

if (activateData) {

    
}

  return (
    <div className='actiavte-page'>

    <div className="wrapperAlert">

    <div className="contentAlert">
  
      <div className="topHalf">
  
        <p><svg viewBox="0 0 512 512" width="100" title="check-circle">
          <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
          </svg></p>
        <h1>Congratulations</h1>
  
       <ul className="bg-bubbles">
         <li className='small'></li>
         <li className='small'></li>
         <li className='small'></li>
         <li className='small'></li>
         <li className='small'></li>
         <li className='small'></li>
         <li className='small'></li>
         <li className='small'></li>
         <li className='small'></li>
         <li className='small'></li>
       </ul>
      </div>
  
      <div className="bottomHalf">
  
        <p>Well Done!, Your Account Is Activate Now Enjoy Reading books And Join Workshop</p>
  
        <button onClick={redirect} id="alertMO">Login</button>
  
      </div>
  
    </div>        
  
  </div>

  </div>

  )
}

export default Activatepage