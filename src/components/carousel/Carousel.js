import panteo  from "../../pictures/panteo.PNG"
import aile  from "../../pictures/aile.PNG"
import blog  from "../../pictures/blog.PNG"
import drag  from "../../pictures/drag_drop.PNG"
import puzzle  from "../../pictures/puzzle.PNG"
import wincar  from "../../pictures/wincar.PNG"
import balls  from "../../pictures/balls.PNG"
import search  from "../../pictures/search.PNG"
import evre  from "../../pictures/evre.PNG"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Carous(){

    return (
        
            <Carousel autoPlay showThumbs={false} dynamicHeight={false} infiniteLoop={true}>
                <div>
                    <img src={aile} alt="aile"/>
                    <a href="https://ailebul.herokuapp.com/" target="_blank" rel="noreferrer">
                        <p className="legend">Aile Bul</p>
                    </a>  
                </div>
                <div>
                    <img src={panteo} alt="panteo" />
                    <a href="https://pntn-yilmaz.netlify.app/" target="_blank" rel="noreferrer">
                        <p className="legend">Resize, Drag & Drop</p>
                    </a>
                </div>
                <div>
                    <img src={blog} alt="blog"/>
                    <a href="https://yilmazblog.herokuapp.com/" target="_blank" rel="noreferrer">
                        <p className="legend">Blog</p>
                    </a>
                </div>
                <div>
                    <img src={drag} alt="drag"/>
                    <a href="https://dragdropdemo.netlify.app/" target="_blank" rel="noreferrer">
                        <p className="legend">Drag & Drop</p>
                    </a>
                </div>
                <div>
                    <img src={puzzle} alt="puzzle"/>
                    <a href="https://puzzle-yilmaz.netlify.app/" target="_blank" rel="noreferrer">
                        <p className="legend">Puzzle</p>
                    </a>
                </div>
                <div>
                    <img src={wincar} alt="wincar"/>
                    <a href="https://wincar-yilmaz.netlify.app/" target="_blank" rel="noreferrer">
                        <p className="legend">Car Game</p>
                    </a>
                </div>
                <div>
                    <img src={balls} alt="balls"/>
                    <a href="https://balls-yilmaz.netlify.app/" target="_blank" rel="noreferrer">
                        <p className="legend">Heavy Ball</p>
                    </a>
                </div>
                <div>
                    <img src={search} alt="search"/>               
                    <a href="https://my-search.netlify.app/" target="_blank" rel="noreferrer">
                        <p className="legend">Search Engine</p>
                    </a>
                </div>
                <div>
                    <img src={evre} alt="evre"/>
                    <a href="https://evreka-yilmaz.netlify.app/" target="_blank" rel="noreferrer">
                        <p className="legend">Complex Table</p>
                    </a>
                </div>
            </Carousel>


    )
}