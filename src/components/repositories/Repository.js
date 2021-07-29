import { useState, useEffect } from "react"
import "./Repository.css"
import panteo  from "../../pictures/panteo.PNG"
import aile  from "../../pictures/aile.PNG"
import blog  from "../../pictures/blog.PNG"
import drag  from "../../pictures/drag_drop.PNG"
import puzzle  from "../../pictures/puzzle.PNG"
import wincar  from "../../pictures/wincar.PNG"
import balls  from "../../pictures/balls.PNG"


export default function Repository(){

const [pictures, setPictures] = useState([])

useEffect(()=>{

setTimeout(()=>{
    setPictures([panteo, aile, blog, drag, puzzle, wincar, balls])
},2500)

},[])
    return (
        <div className="repoMain text-center align-center">
            <div className="cell">
                <a href="https://pntn-yilmaz.netlify.app/" target="_blank" rel="noreferrer">
                    {pictures.length === 0 ? null : <img src={panteo} alt="panteo" />}
                </a>
            </div>
            <div className="cell">
                <a href="https://ailebul.herokuapp.com/" target="_blank" rel="noreferrer">
                    {pictures.length === 0 ? null : <img src={aile} alt="aile" />}
                </a>
            </div>
            <div className="cell">
                <a href="https://yilmazblog.herokuapp.com/" target="_blank" rel="noreferrer">
                    {pictures.length === 0 ? null : <img src={blog} alt="blog" />}
                </a>
            </div>
            <div className="cell">
                <a href="https://dragdropdemo.netlify.app/" target="_blank" rel="noreferrer">
                    {pictures.length === 0 ? null : <img src={drag} alt="drag" />}
                </a>
            </div>
            <div className="cell">
                <a href="https://puzzle-yilmaz.netlify.app/" target="_blank" rel="noreferrer">
                    {pictures.length === 0 ? null : <img src={puzzle} alt="puzzle" />}
                </a>
            </div>
            <div className="cell">
                <a href="https://wincar-yilmaz.netlify.app/" target="_blank" rel="noreferrer">
                    {pictures.length === 0 ? null : <img src={wincar} alt="wincar" />}
                </a>
            </div>
            <div className="cell">
                <a href="https://balls-yilmaz.netlify.app/" target="_blank" rel="noreferrer">
                    {pictures.length === 0 ? null : <img src={balls} alt="balls" />}
                </a>
            </div>
            <div className="cell text-white py-10">
                <i className="fas fa-tools"></i>
                <p className="my-2">Something under construction !</p>
            </div>

        </div>
    )
}