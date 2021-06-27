import styles from "./Picture.module.css";
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

export default function Picture(props){

    return(
        <div className={styles.picDiv}>
            <FullscreenExitIcon onClick={props.onClick} className={styles.FullscreenExitIcon}/>
            <img id={props.id} src={props.source} alt="sdsf"/>
        </div>
    )

}