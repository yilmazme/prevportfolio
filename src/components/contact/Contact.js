import "./Contact.css";
import {FaRegWindowClose} from "react-icons/fa"


export default function Contact(props){




    return(
        <div className="modal">
                <div>
                    <h4>
                        Mehmet Yılmaz
                    </h4>
                    <p><em>Software Developer</em></p>
                    <h5>Phone: +90 538 476 1082</h5>
                    <h5>E-mail: 10myilmaz@gmail.com</h5>
                </div>
                <FaRegWindowClose onClick={props.onClick} id="FaRegWindowClose"/>
        </div>
    )
}