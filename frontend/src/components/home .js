import React from "react";
import {Link} from "react-router-dom"
import "./home.css"
import { AiOutlineSearch } from "react-icons/ai";

function Home(){
    return (
        <div className="home-body">
          <div className="home">
            <div className="header">
            </div>
            <div className="main"><b>Home</b></div>
            <div className="search">
              <AiOutlineSearch className="iconsearch"/>
              <input type="text" className="searchtext" placeholder="Search"></input>
            </div>
            <div className="topSongs">
              <h1>Top 10 Songs</h1>
              <Link to="/addsongs"><div className="addSongs">+  Add Songs</div></Link>
            </div>
          </div>
        </div>
      );
}

export default Home;