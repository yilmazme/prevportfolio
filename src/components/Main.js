import "./Main.css"
import {FaMapPin} from "react-icons/fa";
import mypic from "../pictures/mypic.jpg"

export default function Main() {

    return (
      
            <div className="main">
                <div className="welcome">
                    <h3>Welcome</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dolore beatae sed dicta totam non, explicabo pariatur consequatur 
                        nihil veniam nam corporis rerum debitis numquam voluptates! Quo minus 
                        dolores culpa sed.
                    </p>
                </div>
                <div className="my-intro">
                    <div className="my-card">
                        <FaMapPin id="FaMapPin" />
                        <img src={mypic} alt="mypic"/>
                        <h5>Mehmet Yılmaz</h5>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                </div>
            </div>
    
    )
}