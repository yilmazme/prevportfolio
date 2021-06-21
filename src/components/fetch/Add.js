import { useState } from "react";
import "./Add.css";
import {FaRegWindowClose} from "react-icons/fa"

export default function Add(props) {

    const [user, setUser] = useState({ UserName: "", City: "", PhotoFileName: "anonymous.png" })

    const APIUrl = process.env.REACT_APP_USER_API;
    const PhotoUrl = process.env.REACT_APP_PHOTO_PATH;


    function handleChange(ev) {
        const value = ev.target.value;
        setUser({ ...user, [ev.target.name]: value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch(APIUrl, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                UserName: user.UserName,
                City: user.City,
                DateOfJoining: new Date().toLocaleDateString(),
                PhotoFileName: user.PhotoFileName
            })
        })
            .then((data) => data.json())
            .then((result) => { alert(result); props.onClick() },
                (error) => { alert(error) })

    }

    function handleFileSelected(event) {
        event.preventDefault();
       if(event.target.files[0]){
        user.PhotoFileName = event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(APIUrl + "/SaveFile", {
            method: "POST",
            mode: "cors",
            body: formData
        })
            .then(res => res.json())
            .then((result) => {
                setUser({ ...user, PhotoFileName: result })
            },
                (error) => {
                    alert(error);
                })
       }
    }

    return (
        <div className="add-modal">
            <div>
            <img src={PhotoUrl + user.PhotoFileName} alt="asds" />
            <input onChange={handleFileSelected} type="File" required id="file"/>
            </div>
            <form onSubmit={handleSubmit}>
                <label >
                    <h4>Full Name:</h4>
                    <input value={user.UserName} name="UserName" id="name"
                        onChange={handleChange} required placeholder="Mehmet Yılmaz">
                    </input>
                </label>

                <label>
                    <h4>Join From:</h4>
                    <input value={user.City} name="City" id="city"
                        onChange={handleChange} required placeholder="Ankara">
                    </input>
                </label>

                <input type="submit" value="Submit" />
            </form>
           
          
            <FaRegWindowClose onClick={props.onClick} id="FaRegWindowClose_1"/>
        </div>
    )
}