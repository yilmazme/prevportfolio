import "./Picture.css";

export default function Picture(props){

    return(
        <div className="pic-div" onClick={props.onClick}>
            <img src={props.source} alt="sdsf"/>
        </div>
    )

}