import { useState, useEffect } from "react";
import "./Fetch.css";
import Backdrop from "../contact/Backdrop";
import Add from "./Add";

export default function Fetch() {

    const [state, setState] = useState({ users: [], load: false, error:null });

    const [showAdd, setShowAdd] = useState(false);

    function showModal() {
        setShowAdd(true)
    }
    function closeModal() {
        setShowAdd(false)
    }

    const APIUrl = "http://localhost:5000/api/users";
    const PhotoUrl = "http://localhost:5000/Photos/";

    useEffect(() => {
        fetch(APIUrl)
            .then((response) => response.json())
            .then((data) => setState({ users: data, load: true }))
            .catch((err)=>{setState({...state, load:true, error:err})})
    }, [state])

    if (state.error) {
        return <div className="warning text-center m-2">There is a problem with source or your internet connection.</div>;
    }
    else if (!state.load) {
        return <div className="text-center m-2">Loading...</div>
    }
    else {
        return (
            <div className="main-fetch">
                {
                    state.users.map((user) => {
                        return (
                            <div key={user.UserName} className="user-card">
                                <img src={PhotoUrl + user.PhotoFileName} alt="something" />
                                <h5>{user.UserName}</h5>
                                <p>{user.DateOfJoining.substring(0,10)}</p>
                            </div>
                        )
                    })
                }

            {showAdd && <Backdrop onClick={closeModal} />}
            {showAdd && <Add onClick={closeModal} />}
                <button onClick={showModal}>Join Contest</button>
            </div>
        )
    }

}