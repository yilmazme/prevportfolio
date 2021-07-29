import "./Picture.css";
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

export default function Picture(props){

    return(
        <div className="picDiv">
            <FullscreenExitIcon onClick={props.onClick} className="FullscreenExitIcon"/>
            <img id={props.id} src={props.source} alt="sdsf"/>
        </div>
    )

}