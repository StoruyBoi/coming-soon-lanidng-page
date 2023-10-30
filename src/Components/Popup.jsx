import React from 'react'

import "../App.css";
import { useNavigate } from 'react-router-dom';
export default function Popup() {
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/home`; 
      navigate(path);
    }
  return (
<>



<div className="pop-wrapper">
    <div className="pop-cont">
<div className="popup-cot-innwr">
    <div className="poup-1">
        <h1>We are Live Now!</h1>
        <p>Our new feature is now Live and ready for you <br /> to explore. Go ahead and give it a try</p>
    </div>
    <div className="poup-but">
        <button onClick={routeChange}>Get Started</button>
    </div>
</div>
    </div>
</div>





</>
  )
}
