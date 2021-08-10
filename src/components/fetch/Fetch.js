import { useState, useEffect } from "react";
import "./Fetch.css";
import { v4 as uuid4 } from "uuid";
import {FaMapPin} from "react-icons/fa";
import Picture from "./Picture";
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';

export default function Fetch() {

    const [state, setState] = useState({ photos: [], load: false, error:null });


    const [showPic, setShowPic] = useState(false);
    const [picId, setPicId] = useState(null);
    const [query, setQuery]=useState("dark night")
    const [search, setSearch]=useState(0)
  
    function openPic(x) {
        setShowPic(true)
        setPicId(x)
        console.log("load")
    }
    function closePic() {
        setShowPic(false)
        console.log("load")
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSearch(s=>s+1)
        console.log("searched: " + search)
    }

    // const APIUrl = process.env.REACT_APP_USER_API;
    // const PhotoUrl = process.env.REACT_APP_PHOTO_PATH;

    //const API_KEY = process.env.REACT_APP_API_KEY;
    var URL = "https://pixabay.com/api/?key=22251568-17fb9ec45c88359d744e947a8&q="+encodeURIComponent(query);

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => setState({...state, photos: data.hits, load: true }))
            .catch((err)=>{setState({...state, load:true, error:err})
                console.log(err)
        })
           console.log("fetched")
    }, [search])

    if (state.error !== null) {
        return <div className="warning text-center m-2">There is a problem with source or your internet connection.</div>;
    }
    else if (!state.load) {
        return <div className="text-center m-2">Loading...</div>
    }
    else {
        return (
            <div className="fetchMain">
                <div className="introFetch">
                   
                    <form onSubmit={handleSubmit} className="form">
                        <input autoFocus type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="input rounded"/>
                        <button className="submitBtn" type="submit">
                            <SearchIcon/>
                        </button>
                    </form>
                    <br/>
                    <h4 className="h5 my-1 px-4 ">Merhaba!</h4>
                    <p className="px-6 text-left leading-8 font-thin">
                    Bu sayfada arama kutucuğuna istediğiniz, tabi fotoğrafı olabilecek ifadeleri yazıp <i>Pixabay </i>
                    sitesinden fotoğrafları siteye çekebilirsiniz. Fotoğrafı büyütüp HD kalitesinde bakabilirsiniz.
                    Bu sayfanın temel amacı bir WEB API'sini değişen query'e göre tekrar almayı göstermektir.
                    </p>
                </div>              
                <div className="cardGroup">
                    { 
                        state.photos.map((photo) => {
                            if(state.photos.length===0){
                                return  <div className="text-center m-2">No Photos Found...</div>
                            }
                            return (
                                <div key={uuid4()} className="userCard">
                                    <FullscreenIcon className="FullscreenIcon" onClick={()=>openPic(photo.id)}/>
                                    <FaMapPin className="FaMapPin" />
                                    <img src={photo.largeImageURL} alt="something" onClick={()=>openPic(photo.id)}/>
                                    <p className="py-1 px-1">Foto Sahibi: <em>{photo.user.substring(0,12)}</em></p>                         
                                    <span className="-my-4">{photo.likes}<FavoriteIcon className="FavoriteIcon"/></span>                                    
                                </div>
                            )
                        })
                    }
                    {showPic && <Picture source={state.photos.filter((photo)=>photo.id === picId).map(x=> x.largeImageURL)} onClick={closePic}/>}
                </div>
             
            </div>
        )
    }

}