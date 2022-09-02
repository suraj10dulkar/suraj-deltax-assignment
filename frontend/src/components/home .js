import React from "react";
import {Link} from "react-router-dom"
import "./home.css"
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios"
import {useEffect, useState} from 'react';

function Home(){

  const [postData, setPostData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3005/image").then((res)=>{
            let data = res.data.reverse();
            setPostData(data);
            console.log(data);
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
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
          <div className='cart'>
            {postData.map((data, index) => {
                return (
                  <div>
                    <div key={index} className='cart_child' type="none">
                     <h2>{data.song_name}</h2>
                     <h1>{data.dor}</h1>
                     <img src={data.image} alt={"cover"} className="cover-track"></img>
                     <h3>{data.artist_name}</h3>
                    </div>
                  </div>
                    
                )
            })}
        </div>
        </div>
        
      );
}

export default Home;