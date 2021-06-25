import styles from "./Backdrop.module.css"

export default function Backdrop(props){
        return (
            <div onClick={props.onClick} className={styles.backdrop}></div>
        )
}