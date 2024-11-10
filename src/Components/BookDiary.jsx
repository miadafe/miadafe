import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import "./BookDiary.css"
import {BookDiaryEntry} from './BookDiaryEntry'
import { useStoreState } from 'easy-peasy';

export function BookDiary(){
    const bookDiaries = useStoreState(state => state.bookDiaryEntries);

// const bookDiaryEntries = [
//     {title:"heyy uhhhh .. is this thing on?",
//     author:"mr man",
//     oneliner:"i read this in a day because i loved it",
//     img:iconA,
//     starRating: 3,
//     content: "i loled",
//     dateFinished: "11:04:24"
//     },
//     {title:"heyy uhhhh .. is this thing on?",
//     author:"mr man",
//     oneliner:"i read this in a day because i loved it",
//     img:iconA,
//     starRating: 3,
//     content: "i loled",
//     dateFinished: "11:04:24"
//     } 
// ]   

    return(
        <div>
            {bookDiaries.map((entry, index) => (
                //make a component for book diary entry?
                // <BookDiaryEntry title={entry.title} author={entry.author} img={entry.img} starRating={entry.starRating} content={entry.content} dateFinished={entry.dateFinished}/>
                <div key={index}>
                <h2 className='entry-title'>{entry.title}</h2>
                <h2 className='entry-author'>{entry.author}</h2>
                {/* <p className='entry-caption'>{entry.photoCaption}</p> */}
                <p className='entry-dateFinished'>{entry.dateFinished}</p>
                {/* <div>
                  {entry.photos.map((photo, i) => (
                    <img className='entry-img' key={i} src={photo} alt={`${entry.title} ${i}`} />
                  ))}
                </div> */}
              </div>

            ))}
        </div>
    )
}