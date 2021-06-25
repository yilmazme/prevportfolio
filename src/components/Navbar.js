import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import styles from "./Navbar.module.css";
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

        <div className={styles.container}>
            <Router>
                <div className={styles.navbar}>

                    <div className={styles.home}>
                        <Link to="/home"><FaHome className={styles.FaHome} /></Link>
                    </div>

                    <div className={styles.navLinks}>
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
                        <div onClick={showModal} className={styles.contactBtn}>
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
  