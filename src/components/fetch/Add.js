import { useState } from "react";
import "./Add.css";

export default function Add(props) {

    const [user, setUser] = useState({ UserName: "", City: "", PhotoFileName: "anonymous.png" })

    const APIUrl = "http://localhost:5000/api/users";
    const PhotoUrl = "http://localhost:5000/Photos/";


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
            .then((result) => { alert(result) },
                (error) => { alert(error) })

    }

    function handleFileSelected(event) {
        event.preventDefault();
        user.PhotoFileName = event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(PhotoUrl + "Users/SaveFile", {
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

    return (
        <div className="add-modal">
            <form onSubmit={handleSubmit}>
                <label >
                    Name:
                    <input value={user.UserName} name="UserName" id="name"
                        onChange={handleChange}>
                    </input>
                </label>

                <label>
                    Join From:
                    <input value={user.City} name="City" id="city"
                        onChange={handleChange}>
                    </input>
                </label>

                <input type="submit" value="Submit" />
            </form>
            <img width="200px" height="200px" src={PhotoUrl + user.PhotoFileName} alt="asds" />
            <input onChange={handleFileSelected} type="File" />

            <button onClick={props.onClick}>close</button>

        </div>
    )
}