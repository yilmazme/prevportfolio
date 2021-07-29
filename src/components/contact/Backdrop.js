import "./Backdrop.css"

export default function Backdrop(props){
        return (
            <div onClick={props.onClick} className="backdrop"></div>
        )
}