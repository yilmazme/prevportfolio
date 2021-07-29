import "./Contact.css";
import CloseIcon from '@material-ui/icons/Close';

export default function Contact(props){




    return(
        <div className="contactModal">
                <div className="my-4">
                    <h4>
                        Mehmet Yılmaz
                    </h4>
                    <p><em>Software Developer</em></p>
                    <h5>Phone: +90 538 476 1082</h5>
                    <h5>E-mail: 10myilmaz@gmail.com</h5>
                </div>
                <CloseIcon onClick={props.onClick} className="CloseIcon"/>
        </div>
    )
}