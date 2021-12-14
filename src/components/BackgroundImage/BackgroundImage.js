import React from "react";
import "./BackgroundImage.css";
import "bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom"
import Background from "../../assets/bg.jpg"

function BackgroundImage() {
  return (
    <div>
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <span> Stylish & Trendy Hats!</span>
        <p>Check out our collection now</p>
        <Link to="/shop"><button>Shop</button></Link>
      </div>
    </div>
  );
}

export default BackgroundImage;
