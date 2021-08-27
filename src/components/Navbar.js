import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import "./Navbar.css";
import {FaHome} from "react-icons/fa";
import Contact from './contact/Contact';
import Backdrop from './contact/Backdrop';
import Main from "./Main";
import Fetch from "./fetch/Fetch";
import Repository from "./repositories/Repository";
import Code from "./codes/Code";
import NotFound from "./NotFound";
import TemporaryDrawer from "./drawer/Drawer"



export default function Navbar() {

    const [show, setShow] = useState(false);

    function showModal() {
        setShow(true)
    }
    function closeModal() {
        setShow(false)
    }

    return (

        <div className="navContainer">
            <Router>
                <nav>

                    <div className="homeIcon">
                        <Link to="/home"><FaHome className="FaHome" /></Link>
                    </div>

                    <div className="navLinks">
                      
                        <div>
                            <Link to="/repos">Works</Link>
                        </div>
                        
                        <div>
                            <Link to="/fetch">API Fetch</Link>
                        </div>
                        <div>
                            <Link to="/codes">Code Snippets </Link>
                        </div>
                      
                        <div onClick={showModal} className="contactBtn">
                          <button>Contact</button>
                        </div>
                      
                        <TemporaryDrawer/>                   
                    </div>

                </nav>
                <Switch>
                    <Route exact path="/">
                      <Redirect to="/home"/>  
                    </Route>
                    <Route path="/home">
                        <Main/>
                    </Route>
                   
                    <Route path="/repos">
                        <Repository/>
                    </Route>
                    <Route path="/codes">
                        <Code/>
                    </Route>
                    <Route path="/fetch">
                        <Fetch/>
                    </Route>
                    <Route path='*'>
                        <NotFound/>
                    </Route>

                </Switch>
            </Router>
            {show && <Backdrop onClick={closeModal} />}
            {show && <Contact onClick={closeModal} />}
        </div>
    );
}
  