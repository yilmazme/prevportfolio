import { useState } from "react";
import "./Main.css"
import {FaMapPin} from "react-icons/fa";
import mypic from "../pictures/mypic.jpg"
import Contact from "./contact/Contact";
import Backdrop from "./contact/Backdrop";


export default function Main() {

    const [show, setShow] = useState(false);

    function showModal() {
        setShow(true)
    }
    function closeModal() {
        setShow(false)
    }

    return (
      
        <div className="mainMain">
            <div className="welcome text-center bg-blue-100 rounded-xl text-black-700">
                <h1 className="h3">Welcome!</h1>
                <p className="px-6 text-left leading-8 font-bold">
                    The goal of this website is to introduce myself and share some experiences with people.
                    <br/>
                    I am a software developer with a few years of experience in front and back ends. Currently, 
                    I am working as a software engineer at Su Bilgi Teknolojileri A.Ş.
                    <br/>
                    Here on this site, you can find some of my works, experiences, and mistakes.
                    The site is not complete and it won't be any time soon.
                    Well not because I am lazy, new things to be learned are infinite as you know <>&#128516;</>.
                </p>
            </div>
            <div className="myPicDiv bg-blue-100 rounded-xl">
                <div className="myCard" onClick={showModal}>
                    <FaMapPin className="MainfaMapPin" />
                    <img src={mypic} alt="mypic" />
                    <h5 className="font-bold">Mehmet Yılmaz</h5>
                    <p><em>Yee, this is me.</em></p>
                </div>
            </div>
            {show && <Backdrop onClick={closeModal} />}
            {show && <Contact onClick={closeModal} />}
        </div>
    
    )
}