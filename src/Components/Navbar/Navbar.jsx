import React from 'react'
import data from "../../Data.json";

export default function Navbar() {
  return (
    <div className="bar">
        <div className="logo-sec">
          <img src={data.images.logo} alt="logo" id="logo" />
          <div className="verti-bar"></div>
          <span>Stories</span>
        </div>

        <button>Courses</button>
      </div>
  )
}
