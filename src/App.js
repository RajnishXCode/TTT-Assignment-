import React, { useState } from "react";
import data from "./Data.json";
import "./App.css";
import Post from "./Components/Post/Post";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";

function App() {

  const [like, setLike] = useState(12);

  return (
    <div className="App">
      
      <Navbar/>
      <div className="cover-sec" style={{backgroundImage:`url(${data.images.cover})`}}></div>
      <Profile like={like} />
      <div className="sec-btn">
        <button className="btn1">
          <b style={{color: "#2094c3"}}>314 Posts</b>
        </button>
        <hr />
      </div>
      <Post like={like} morelike={()=> setLike(like + 1)} />

    </div>
  );
};

export default App;
