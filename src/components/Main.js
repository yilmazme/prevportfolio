import { useState } from "react";
import styles from "./Main.module.css"
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
      
            <div className={styles.main}>
                <div className={styles.welcome}>
                    <h3>Welcome</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dolore beatae sed dicta totam non, explicabo pariatur consequatur 
                        nihil veniam nam corporis rerum debitis numquam voluptates! Quo minus 
                        dolores culpa sed.
                    </p>
                </div>
                <div className={styles.myIntro}>
                    <div className={styles.myCard} onClick={showModal}>
                        <FaMapPin className={styles.FaMapPin} />
                        <img src={mypic} alt="mypic"/>
                        <h5>Mehmet Yılmaz</h5>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                </div>
                {show && <Backdrop onClick={closeModal} />}
                {show && <Contact onClick={closeModal} />}
            </div>
    
    )
}