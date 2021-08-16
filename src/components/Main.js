import { useState } from "react";
import "./Main.css"
import {FaMapPin} from "react-icons/fa";
import mypic from "../pictures/mypic.jpg"
import Contact from "./contact/Contact";
import Backdrop from "./contact/Backdrop";
import SearchIcon from '@material-ui/icons/Search';
import { Link} from 'react-router-dom';
import Carous from "./carousel/Carousel";

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
            <div className="div1 text-center rounded-xl bg-white">
                <div className="myIntro">
                    <h1 className="h3 text-left px-7">Welcome!</h1>
                    <p className="px-6 text-left leading-8 ">
                        The goal of this website is to introduce myself and share some experiences with people.
                        <br />
                        I am a software developer with a few years of experience in front and back ends. Currently,
                        I am working as a software engineer at Su Bilgi Teknolojileri A.Ş.
                        <br />
                        Here on this site, you can find some of my works, experiences, and mistakes.
                        The site is not complete and it won't be any time soon.
                        Well,it is not because I am lazy, it is because there will always be new things to learn and add to the site <>	&#128522;</>.
                    </p>
                </div>
                <div className="myCard" onClick={showModal}>
                    <FaMapPin className="MainfaMapPin" />
                    <img src={mypic} alt="mypic" />
                    <h5 className="font-bold">Mehmet Yılmaz</h5>
                    <p><em>Yeah, this is me.</em></p>
                </div>
            </div>

            <div className="div5 rounded-xl">
                <h3 className="h4 text-left pl-9 pt-2">Contact</h3>
                <p className="text-right text-white pr-2">< SearchIcon className="searchIcon" onClick={showModal} /></p>
            </div>
            <div className="div4 rounded-xl">
                <h3 className="h4 text-left pl-9 pt-2">Code Snippets </h3>
                <p className="text-right text-white pr-2">
                    <Link to="/codes"> < SearchIcon className="searchIcon" /></Link>

                </p>
            </div>
            <div className="div3 rounded-xl">
                <h3 className="h4 text-left pl-9 pt-2">API Fetch Example</h3>

                <p className="text-right text-white pr-2">
                    <Link to="/fetch">< SearchIcon className="searchIcon" /></Link>
                </p>
            </div>
            <div className="div2 rounded-xl">
                <h3 className="h4 text-left pl-9 pt-2">Works</h3>
                <p className="text-right text-white pr-2">
                    <Link to="/repos">< SearchIcon className="searchIcon" /></Link>
                </p>
            </div>
            <Carous/>
    
            {show && <Backdrop onClick={closeModal} />}
            {show && <Contact onClick={closeModal} />}
        </div>

    )
}