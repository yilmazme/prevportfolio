import panteo  from "../../pictures/panteo.PNG"
import aile  from "../../pictures/aile.PNG"
import blog  from "../../pictures/blog.PNG"
import drag  from "../../pictures/drag_drop.PNG"
import puzzle  from "../../pictures/puzzle.PNG"
import wincar  from "../../pictures/wincar.PNG"
import balls  from "../../pictures/balls.PNG"
import search  from "../../pictures/search.PNG"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Carous(){

    return (
        <div className="caurosolDiv">
            <Carousel autoPlay showThumbs={false} dynamicHeight={false} infiniteLoop={true}>
                <div>
                    <img src={aile} alt="aile"/>
                    <p className="legend">Aile Bul</p>
                </div>
                <div>
                    <img src={panteo} alt="panteo" />
                    <p className="legend">Panteo</p>
                </div>
                <div>
                    <img src={blog} alt="blog"/>
                    <p className="legend">Blog</p>
                </div>
                <div>
                    <img src={drag} alt="drag"/>
                    <p className="legend">Drag</p>
                </div>
                <div>
                    <img src={puzzle} alt="puzzle"/>
                    <p className="legend">Puzzle</p>
                </div>
                <div>
                    <img src={wincar} alt="wincar"/>
                    <p className="legend">Wincar</p>
                </div>
                <div>
                    <img src={balls} alt="balls"/>
                    <p className="legend">Balls</p>
                </div>
                <div>
                    <img src={search} alt="search"/>
                    <p className="legend">Search</p>
                </div>
            </Carousel>

        </div>

    )
}