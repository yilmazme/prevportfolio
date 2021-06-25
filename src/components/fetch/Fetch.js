import { useState, useEffect } from "react";
import styles from "./Fetch.module.css";
import Backdrop from "../contact/Backdrop";
import Add from "./Add";
import { v4 as uuid4 } from "uuid";
import {FaMapPin} from "react-icons/fa";
import Picture from "./Picture";

export default function Fetch() {

    const [state, setState] = useState({ users: [], load: false, error:null });

    const [showAdd, setShowAdd] = useState(false);
    const [showPic, setShowPic] = useState(false);
    const [picId, setPicId] = useState(null);

  

    function openModal() {
        setShowAdd(true)
    }
    function closeModal() {
        setShowAdd(false)
    }
    function openPic(x) {
        setShowPic(true)
        setPicId(x)
        console.log(x)
    }
    function closePic() {
        setShowPic(false)
    }

    const APIUrl = process.env.REACT_APP_USER_API;
    const PhotoUrl = process.env.REACT_APP_PHOTO_PATH;

    useEffect(() => {
        fetch(APIUrl)
            .then((response) => response.json())
            .then((data) => setState({...state, users: data, load: true }))
            .catch((err)=>{setState({...state, load:true, error:err})
                console.log(err)
        })
            console.log("fetched")
    }, [showAdd])

    if (state.error !== null || state.users.length === 0) {
        return <div className={styles.warning + "text-center m-2"}>There is a problem with source or your internet connection.</div>;
    }
    else if (!state.load) {
        return <div className={"text-center m-2"}>Loading...</div>
    }
    else {
        return (
            <div className={styles.main}>
                <div className={styles.introFetch}>
                    <h4 className={"m-2"}>Hola!</h4>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus 
                    accusantium nemo totam minus, ducimus, tenetur odit aperiam quis id perferendis 
                    atque illum dolores reprehenderit cupiditate harum voluptas adipisci dicta corrupti!
                    </p>
                    {/* <p> 
                        I should admit the goal of this section is totally to show requriters that 
                        I can develop full stack projects too but, this should not make you have less fun.
                        Go ahead, lets see your picture can be winner of the month.
                        Or you can just vote your favourite ones.
                    </p> */}
                <button onClick={openModal}>Join Contest</button>
             
                </div>
                <div className={styles.cardGroup}>
                    {
                        state.users.map((user) => {
                            return (
                                <div key={uuid4()} className={styles.userCard}>
                                    
                                    <FaMapPin className={styles.FaMapPin} />
                                    <img src={user.PhotoFileName ? PhotoUrl + user.PhotoFileName : ""} alt="something" onClick={()=>openPic(user.UserId)}/>
                                    <h5>{user.UserName}</h5>                         
                                    <p>{user.DateOfJoining.substring(0, 10)}</p>                                    
                                </div>
                            )
                        })
                    }
                    {showPic && <Picture source={PhotoUrl + state.users.filter((user)=>user.UserId === picId).map(x=> x.PhotoFileName)} onClick={closePic}/>}
                    {showAdd && <Backdrop onClick={closeModal} />}
                    {showAdd && <Add onClick={closeModal} />}
                </div>
             
            </div>
        )
    }

}