import "./Polaroid.css"

export function Polaroid(props){
    return(
        <div className='frame'>
            <img src={props.img} className="polaroid-pic"/>

            <p className="scribble"> {props.scribble} </p>
        </div>
    )
}