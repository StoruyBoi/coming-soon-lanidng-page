import React from 'react'
import "../App.css"
import Maincontent from './Maincontent'

export default function BgOverlay() {
  return (
  <>

 
          <div className="over-lay">
          <Maincontent/>
          <div className="b1-cont">
            <div className="box box1"></div>
          </div>

          <div className="b2-cont">
            <div className="box box2"></div>
          </div>
        </div>
       
       
  
  </>
  )
}
