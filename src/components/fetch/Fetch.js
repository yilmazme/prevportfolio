import { useState, useEffect } from "react";
import styles from "./Fetch.module.css";
import Backdrop from "../contact/Backdrop";
import Add from "./Add";
import { v4 as uuid4 } from "uuid";
import {FaMapPin} from "react-icons/fa";
import Picture from "./Picture";
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Fetch() {

    const [state, setState] = useState({ photos: [], load: false, error:null });

    const [showAdd, setShowAdd] = useState(false);
    const [showPic, setShowPic] = useState(false);
    const [picId, setPicId] = useState(null);
    const [query, setQuery]=useState("dark night")
    const [search, setSearch]=useState(0)
  

    function openModal() {
        setShowAdd(true)
        console.log("load")
    }
    function closeModal() {
        setShowAdd(false)
        console.log("load")
    }
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

    const APIUrl = process.env.REACT_APP_USER_API;
    const PhotoUrl = process.env.REACT_APP_PHOTO_PATH;

    var API_KEY = '22251568-17fb9ec45c88359d744e947a8';
    var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(query);

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
        return <div className={styles.warning + "text-center m-2"}>There is a problem with source or your internet connection.</div>;
    }
    else if (!state.load) {
        return <div className={"text-center m-2"}>Loading...</div>
    }
    else {
        return (
            <div className={styles.main}>
                <div className={styles.introFetch}>
                   
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input type="text" value={query} onChange={e => setQuery(e.target.value)} className={styles.input} />
                        <button className={styles.submitBtn} type="submit">Ara</button>
                    </form>
                    <h4 className={"m-2"}>Merhaba!</h4>
                    <p>
                    Bu sayfada arama kutucuğuna istediğiniz, tabi fotoğrafı olabilecek ifadeleri yazıp <i>Pixabay </i>
                    sitesinden fotoğrafları siteye çekebilirsiniz. Fotoğrafı büyütüp HD kalitesinde bakabilirsiniz.
                    Bu sayfanın temel amacı bir WEB API'sini değişen query'e göre tekrar almayı göstermektir.
                    </p>
                    <button onClick={openModal}>Join Contest</button>
                </div>
                <div className={styles.cardGroup}>
                    {
                        state.photos.map((photo) => {
                            return (
                                <div key={uuid4()} className={styles.userCard}>
                                    <FullscreenIcon className={styles.FullscreenIcon} onClick={()=>openPic(photo.id)}/>
                                    <FaMapPin className={styles.FaMapPin} />
                                    <img src={photo.largeImageURL} alt="something" onClick={()=>openPic(photo.id)}/>
                                    <p className={styles.p}>Foto Sahibi: <em>{photo.user.substring(0,12)}</em></p>                         
                                    <span>{photo.likes}<FavoriteIcon className={styles.FavoriteIcon}/></span>                                    
                                </div>
                            )
                        })
                    }
                    {showPic && <Picture source={state.photos.filter((photo)=>photo.id === picId).map(x=> x.largeImageURL)} onClick={closePic}/>}
                    {showAdd && <Backdrop onClick={closeModal} />}
                    {showAdd && <Add onClick={closeModal} />}
                </div>
             
            </div>
        )
    }

}