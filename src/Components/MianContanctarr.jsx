import React, { useEffect, useState } from "react";
import focket from "../Content/frocket.png";
import "../App.css";
import Rocket from "./Rocket";
import Button from "./Button";

export default function MianContanctarr() {

  return (
    <>
      <div className="main-content">
        <div className="main-content-wrapper">
          <div className="titie-cont">
            <div className="title-icon">
             <div className="web-rocket">
             <Rocket /> 
             </div>
             <div className="rocket-text">
              <h1>Launching New Module Soon! </h1>
             
              </div>
            </div>
            <p>
              Exciting things are in the works! We're currently{" "}
              <b> Crafting a new feature </b> for you. <br /> Keep an eye out
              for updates – We're working to make it available soon!
            </p>
          </div>
          <div className="center-h1-getready">
            <h1>GET READY FOR THE REVEAL!</h1>
          </div>
      
      
           
            <Button />
       
        </div>
      </div>
    </>
  );
}
