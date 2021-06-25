import styles from "./Picture.module.css";
import {FaRegWindowClose} from "react-icons/fa"

export default function Picture(props){

    return(
        <div className={styles.picDiv}>
            <FaRegWindowClose onClick={props.onClick} className={styles.FaRegWindowClose}/>
            <img id={props.id} src={props.source} alt="sdsf"/>
        </div>
    )

}