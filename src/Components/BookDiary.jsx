import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import "./BookDiary.css"
import {BookDiaryEntry} from './BookDiaryEntry'
import { useStoreState } from 'easy-peasy';


export function BookDiary(){
    const bookDiaries = useStoreState(state => state.bookDiaryEntries);

    // {
    //     title:"Hostile Environment",
    //     author: "Maya Goodfellow",
    //     photos:[],
    //     content:"",
    //     photoCaption:"photo caption",
    //     dateFinished: "20.05.24"
    // },



    return(
        <div>
            {bookDiaries.map((entry, i) => (
                //make a component for book diary entry?
                // <BookDiaryEntry title={entry.title} author={entry.author} img={entry.img} starRating={entry.starRating} content={entry.content} dateFinished={entry.dateFinished}/>
                <div key={i} className="entry-container">
                <h2 className='entry-title'>{entry.title}</h2>
                <h2 className='entry-author'>{entry.author}</h2>
                { entry.content === "" ?  <p>content coming soon</p> : <p className='entry-content'>{entry.content}</p>}
                
                <p className='entry-dateFinished'>read: {entry.dateFinished}</p>
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