import React,{useState} from "react";
import {Modal } from "reactstrap";
import { AiOutlineSearch } from "react-icons/ai";
import Filebase64 from "react-file-base64";
import Multiselect from "multiselect-react-dropdown"
import { GoFileMedia } from "react-icons/go";
import "./addsong.css"

function AddSongs(){

  const [modalIsopen, setModalIsopen]=useState(false);
      const [data,setdata] =useState({
        key:"",
        cat:"",
        bio:""
      });
      const [options,setoptions]=useState([])

      // let options=[]
      const handleform=(e)=>{
        e.preventDefault();
        console.log(data)
        // options.push({cat:1,key:data.artist_name})
      }

      const AddItmes=(e)=>{
        setoptions([...options,data])
      }

    
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
            </div>     
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
            
            <div className="artistname">
              <p className="art">Artist</p>
            </div>

            <div className="multiselect">
            <Multiselect
                displayValue="key"
                onKeyPressFn={function noRefCheck(){}}
                onRemove={function noRefCheck(){}}
                onSearch={function noRefCheck(){}}
                onSelect={function noRefCheck(){}}
                options={options}
                showCheckbox
            />
            </div>

            <div className="artist-select">  
          <button className="add-artist" onClick={()=>setModalIsopen(true)}>+ Add Artist</button>  
          <Modal isOpen={modalIsopen} portalclassname="modal">
            <form onSubmit={handleform}>
              <div className="artist-form">
                <div className="box1">
                   <p className="title">Add Artist</p>
                     <button className="close" onClick={()=>setModalIsopen(false)}><b>X</b></button>
                </div>
                <hr></hr>
                <div className="box2">
                  <div className="cont1">
                    <label for="artist-name">Artist Name</label>
                  </div>
                  <div className="cont2">
                    <input type="text" id="artist-name"  required={true} onChange={e=>setdata({...data,key: e.target.value})} ></input>
                  </div>
                </div>
                <div className="box2">
                  <div className="cont1">
                    <label for="artist-date">Date of Birth</label>
                  </div>
                  <div className="cont2">
                    <input type="date" id="artist-date" onChange={e=>setdata({...data,cat: e.target.value})}></input>
                  </div>
                </div>
                <div className="box2">
                  <div className="cont1">
                    <label for="artist-bio">Bio</label>
                  </div>
                  <div className="cont2">
                    <input type="text" id="artist-bio"onChange={e=>setdata({...data,bio: e.target.value})}></input>
                  </div>
                </div>
                <div className="button">
                  <button className="cancel" onClick={()=>setModalIsopen(false)}>Cancel</button>
                  <button className="done" type="submit" onClick={AddItmes}>Done</button>
                </div>
            </div>
            </form>
          </Modal>
          </div>

          </div>
        </div>
    )
}

export default AddSongs;