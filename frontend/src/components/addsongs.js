import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Filebase64 from "react-file-base64";
import { GoFileMedia } from "react-icons/go";
import "./addsong.css"

function AddSongs(){
    return (
        <div>
           <div className="home">
            <div className="header">
            </div>
            <div className="main"><b>Home</b></div>
            <div className="search">
              <AiOutlineSearch className="iconsearch"/>
              <input type="text" className="searchtext" placeholder="Search"></input>
            </div>
          </div>
          <div className="song-form">
            <h1>Adding a New Song</h1>
            <div className="name">
                <label for="name">Song Name</label>
                  <input type="text" className="songname" id="name"></input>
            </div>
            <div className="date">
                <label for="name">Date of Release</label>
                  <input type="text" className="songdate" id="date"></input>
            <div className="image-upload">
                <div className="label-image">
                   <label for="image">Artwork</label>
                </div>
                    <div  className="input-file">
                    <GoFileMedia className="imageicon"/>
                     <Filebase64
                        id="fileimage"
                        type="file"
                        multiple={false}
                        title="Add File"
                    />
                    </div>
                    
            </div>
            </div>
            

          </div>
        </div>
    )
}

export default AddSongs;