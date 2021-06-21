import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import "./Navbar.css";
import {FaHome} from "react-icons/fa";
import Contact from './contact/Contact';
import Backdrop from './contact/Backdrop';
import Lang from "./languages/Lang";
import Main from "./Main";
import Fetch from "./fetch/Fetch";



export default function Navbar() {

    const [show, setShow] = useState(false);

    function showModal() {
        setShow(true)
    }
    function closeModal() {
        setShow(false)
    }


    return (

        <div className="container">
            <Router>
                <div className="navbar">

                    <div id="home">
                        <Link to="/home"><FaHome id="FaHome" /></Link>
                    </div>

                    <div className="nav-links">
                        <div>
                            <Link to="/langs">Languages</Link>
                        </div>
                        <div>
                            <Link to="/repos">Repositories</Link>
                        </div>
                        <div>
                            <Link to="/codes">Code Samples</Link>
                        </div>
                        <div>
                            <Link to="/fetch">Fetch</Link>
                        </div>
                        <div>
                            <a href="https://yilmazme.github.io" target="_#">Old Site</a>
                        </div>
                        <div onClick={showModal} className="contact-button">
                            Contact
                        </div>
                    </div>

                </div>
                <div>
                    <Route exact path="/">
                      <Redirect to="/home"/>  
                    </Route>
                    <Route path="/home">
                        <Main/>
                    </Route>
                    <Route path="/langs">
                        <Lang/>
                    </Route>
                    <Route path="/repos">
                        Repositories
                    </Route>
                    <Route path="/codes">
                        Codes
                    </Route>
                    <Route path="/fetch">
                        <Fetch/>
                    </Route>
                </div>

            </Router>

            {show && <Backdrop onClick={closeModal} />}
            {show && <Contact onClick={closeModal} />}
        </div>
    );
}
  