import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import "./BookDiary.css"
import { Polaroid } from './Polaroid';
import { Note} from './Note';


export function BookDiary(props){

const bookDiaryEntries = [
    {title:"heyy uhhhh .. is this thing on?",
    author:"mr man",
    img:iconA,
    starRating: 3,
    content: "i loled",
    dateFinished: "11:04:24"
    },
    {title:"heyy uhhhh .. is this thing on?",
    author:"mr man",
    img:iconA,
    starRating: 3,
    content: "i loled",
    dateFinished: "11:04:24"
    } 
]   

    return(
        <div>
            {bookDiaryEntries.map((entry) => {
                //make a component for book diary entry
                <BookDiaryEntry title={entry.title} author={entry.author} img={entry.img} starRating={entry.starRating} content={entry.content} dateFinished={entry.dateFinished}/>
            })}
        </div>
    )
}