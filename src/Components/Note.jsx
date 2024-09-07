import "./Note.css"

export function Note(props){
    return(
        <div>
            <p className="note"> {props.text} </p>
        </div>
    )
}