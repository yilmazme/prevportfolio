import React, { useState, useEffect } from "react";
import "./Fetch.css";
import Form from "./Form";
import { v4 as uuid4 } from "uuid";
import {FaMapPin} from "react-icons/fa";
import Picture from "./Picture";
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fade from 'react-reveal/Fade';


 function Fetch() {

    const [state, setState] = useState({ photos: [], load: false, error:null });


    const [showPic, setShowPic] = useState(false);
    const [picId, setPicId] = useState(null);
    const [query, setQuery]=useState("italy")

  
    console.log("fetch rendered")

    function openPic(x) {
        setShowPic(true)
        setPicId(x)
        console.log("load")
    }
    function closePic() {
        setShowPic(false)
        console.log("load")
    }


    // these were for backend
    // const APIUrl = process.env.REACT_APP_USER_API;
    // const PhotoUrl = process.env.REACT_APP_PHOTO_PATH;

    const API_KEY = process.env.REACT_APP_API_KEY;
    var uriQuery = encodeURIComponent(query);
    var URL =`https://pixabay.com/api/?key=${API_KEY}&q=${uriQuery}`
    
  

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => setState({ photos: data.hits, load: true, error:null }))
            .catch((err)=>{setState({photos:[], load:true, error:err})
                console.log(err)
        })
    }, [query, URL])

    if (state.error !== null) {
        return <div className="warning text-center mt-5 p-1 bg-warning ">There is a problem with source or your internet connection.</div>;
    }
    else if (!state.load) {
        return <div className="text-center mt-5 bg-success p-1 text-light">Loading...</div>
    }
    else {
        return (
            <div className="fetchMain">
              <Form passQuery={q => setQuery(q)}/>            
                <div className="cardGroup">
                    { 
                        state.photos.map((photo) => {
                            if(state.photos.length===0){
                                return  <div className="text-center m-2">No Photos Found...</div>
                            }
                            return (
                                <Fade key={uuid4()}>
                                    <div  className="userCard">
                                    <FullscreenIcon className="FullscreenIcon" onClick={()=>openPic(photo.id)}/>
                                    <FaMapPin className="FaMapPin" />
                                    <img src={photo.largeImageURL} alt="something" onClick={()=>openPic(photo.id)}/>
                                    <p className="py-1 px-1">Foto Sahibi: <em>{photo.user.substring(0,12)}</em></p>                         
                                    <span className="-my-4">{photo.likes}<FavoriteIcon className="FavoriteIcon"/></span>                                    
                                </div>
                                </Fade>
                            )
                        })
                    }
                    {showPic && <Picture source={state.photos.filter((photo)=>photo.id === picId).map(x=> x.largeImageURL)} onClick={closePic}/>}
                </div>
             
            </div>
        )
    }

}

export default React.memo(Fetch);