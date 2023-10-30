import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../App.css";
import MianContanctarr from "./MianContanctarr";
import Popup from "./Popup";
import Header from "./Header";
import Home from "./Home";


export default function Maincontent() {
  return (
    <>

      <div className="content">

<Header/>
<BrowserRouter>
  <Routes>

        <Route path="/" element={<MianContanctarr />}></Route>
        
        <Route path="/Live" element={<Popup/>  }></Route>
        <Route path="/Home" element={<Home/>  }></Route>
        
        </Routes>
</BrowserRouter>
      </div>
    </>
  );
}
