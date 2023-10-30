import React from 'react'
import DarkMode from "./DarkMode";
import "../App.css"
export default function Header() {
  return (
<>

<nav>
          <div className="nav-cont">
            {" "}
            <h1>
              {" "}
              THE{" "}
              <span className="nav-hightligh-bg" >
                PRODUCT
              </span>{" "}
              PLATFORM
            </h1>
          </div>
          <DarkMode/>
        </nav>
</>
  )
}
