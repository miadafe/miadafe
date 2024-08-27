import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import "./Polaroid.css"


export function Polaroid(){
    return(
        <div className='frame'>
            <img src={iconA} className="polaroid-pic"/>
        </div>
    )
}