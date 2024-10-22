import "./Flipcard.css"

export function Flipcard(props){
    return(
        <div className='card'>
            <img src={props.img} className="flipcard-pic"/>

            <p className="flipcard-text"> {props.cardtext} </p>
        </div>
    )
}