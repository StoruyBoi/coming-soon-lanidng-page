import React, { useState } from 'react'
import "../App.css";
export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const setDarkMode=()=>{
    document.querySelector("body").setAttribute("data-theme","dark")
  }
  const setLightMode=()=>{
    document.querySelector("body").setAttribute("data-theme","light")
  }
  const toggleTheme=(e)=>{
    setIsDarkMode(!isDarkMode);

    if(e.target.checked) setDarkMode();
    else setLightMode()
  }
  return (
<>






<div className="theme-switch-wrapper">
       <label className="theme-switch" htmlFor="checkbox">
    <input onChange={toggleTheme} type="checkbox" checked={isDarkMode} id="checkbox" />
    <div className="slider round"></div>
  </label>
  </div>
</>
  )
}
