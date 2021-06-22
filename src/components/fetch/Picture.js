import "./Picture.css";
import {FaRegWindowClose} from "react-icons/fa"

export default function Picture(props){

    return(
        <div className="pic-div">
            <FaRegWindowClose onClick={props.onClick} id="FaRegWindowClose_2"/>
            <img id={props.id} src={props.source} alt="sdsf"/>
        </div>
    )

}