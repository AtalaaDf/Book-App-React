import { useNavigate } from "react-router-dom"
import {useSavedBooks} from "../context/SavedBooksContext.jsx"
import { BookOpen, Bookmark, BookmarkCheck } from "lucide-react"


function BookCard({book}){
    const navigate = useNavigate()
    const { isBookSaved, addBook, removeBook } = useSavedBooks()
    const cover = book.cover_id
    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
    : null


    function handleSave(){
        if (isBookSaved(book.key)) {
            removeBook(book.key)
        }else{
            addBook(book)
        }
    }

    return(
        <div className="card" onClick={() => navigate(`/detail/${book.key}`)}>

            <div className="card-figure">
                {cover ? <img src={cover} alt={book.title} /> : <BookOpen/>}
            </div>

            <div className="card-body">

                <h3>
                {book.title}
                </h3>

                <p>
                {book.authors[0]?.name}
                </p>

                <div>
                <span className="badge badge-ghost">
                    {book.first_publish_year}
                </span>
                <button onClick={(e)=>{
                    e.stopPropagation()
                    handleSave()
                }}>
                {isBookSaved(book.key) ? <BookmarkCheck/> : <Bookmark/>}
                </button>
                </div>
            </div>
        </div>
    )
}

export default BookCard