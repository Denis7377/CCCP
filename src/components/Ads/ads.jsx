import React from "react";
import "./ads.css";
import pic1 from "./img/a1.jpg";
import pic2 from "./img/a2.jpeg";
import pic3 from "./img/a3.jpg";
import pic4 from "./img/a4.jpg";
import pic5 from "./img/a5.jpg";


export default function Ads () {
    return <> <div className="promo">
        <img src={pic1} alt="" />
    </div>
    <div className="promo">
        <img src={pic2} alt="" />
    </div>
    <div className="promo">
        <img src={pic3} alt="" />
    </div>
    <div className="promo">
        <img src={pic4} alt="" />
    </div>
    <div className="promo">
        <img src={pic5} alt="" />
    </div>
</>}