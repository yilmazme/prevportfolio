import { useState } from "react";
import "./Main.css"
import { FaMapPin } from "react-icons/fa";
import mypic from "../pictures/mypic.jpg"
import Contact from "./contact/Contact";
import Backdrop from "./contact/Backdrop";
//import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Carous from "./carousel/Carousel";
import SyncAltIcon from '@material-ui/icons/SyncAlt';

export default function Main() {

    const [show, setShow] = useState(false);
    const [state, setState] = useState({ work: true, code: false, api: false, contact: false })

    function showModal() {
        setShow(true)
    }
    function closeModal() {
        setShow(false)
    }

    return (

        <div className="mainMain">
            <div className="div1 text-center">
                <div className="myIntro">
                    <h1 className="h3 text-left px-7">Welcome!</h1>
                    <p className="px-6 text-left leading-5">
                        The goal of this website is to introduce myself and share some experiences with people.
                        <br />
                        I am a software developer with a few years of experience in both backend and frontend. Currently,
                        I am working as a software engineer at Su Bilgi Teknolojileri A.Ş.
                        <br />
                        Here on this site, you can find some of my works, experiences, and mistakes.
                        The site is not complete and it won't be any time soon.
                        Well,it is not because I am lazy, it is because there will always be new things to learn and add to the site <>	&#128522;</>.
                    </p>
                </div>
                <div className="myCard">
                    <FaMapPin className="MainfaMapPin" />
                    <img src={mypic} alt="mypic" onClick={showModal} />
                    <h5>Mehmet Yılmaz</h5>
                    <p><em>Yes, this is me.</em></p>
                </div>
            </div>

            <div className="div5 ">
                <h3 className="h4 text-left pl-9 pt-2">Works</h3>
                <p className="text-right text-white pr-2">
                    < SyncAltIcon className="searchIcon" onClick={() => setState({ work: !state.work, code: false, api: false, contact: false })} />
                </p>

            </div>
            <div className="div4 ">
                <h3 className="h4 text-left pl-9 pt-2">Code Snippets </h3>
                <p className="text-right text-white pr-2">
                    < SyncAltIcon className="searchIcon" onClick={() => setState({ work: false, code: !state.code, api: false, contact: false })} />
                </p>
            </div>
            <div className="div3 ">
                <h3 className="h4 text-left pl-9 pt-2">API Fetch Example</h3>

                <p className="text-right text-white pr-2">
                    < SyncAltIcon className="searchIcon" onClick={() => setState({ work: false, code: false, api: !state.api, contact: false })} />
                </p>
            </div>
            <div className="div2 ">
                <h3 className="h4 text-left pl-9 pt-2">Contact</h3>
                < SyncAltIcon className="searchIcon" onClick={() => setState({ work: false, code: false, api: false, contact: !state.contact })} />

            </div>
            <div className={state.work ? "workDiv showAnimeClass" : "workDiv hideAnimeClass"}>
                <Carous />
            </div>
            <div className={state.code ? "codeDiv showAnimeClass" : "codeDiv hideAnimeClass"}>
                <div className="text-center text-dark py-10">
                    <i className="fas fa-tools"></i>
                    <h3 className="my-2">Something under construction !</h3>
                </div>
                <div className="text-center">
                    <Link to="/codes">Go To The Page</Link>
                </div>
            </div>
            <div className={state.api ? "apiDiv showAnimeClass" : "apiDiv hideAnimeClass"}>
                <div className=" text-center text-dark py-10">
                    <i className="fas fa-tools"></i>
                    <h3 className="my-2">Something under construction !</h3>
                </div>
                <div className="text-center">
                    <Link to="/fetch">Go To The Page</Link>
                </div>
            </div>
            <div className={state.contact ? "contactDiv showAnimeClass" : "contactDiv hideAnimeClass"}>
                <div className="text-center">
                <div className="my-7">
                    <h4>
                        Mehmet Yılmaz
                    </h4>
                    <p><em>Software Developer</em></p>
                    <h5>Phone: +90 538 476 1082</h5>
                    <h5>E-mail: 10myilmaz@gmail.com</h5>
                </div>
                </div>
            </div>

            {show && <Backdrop onClick={closeModal} />}
            {show && <Contact onClick={closeModal} />}
        </div>

    )
}