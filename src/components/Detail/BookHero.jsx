import {useSavedBooks} from "../../context/SavedBooksContext.jsx"
import { BookOpen, Bookmark, BookmarkCheck } from "lucide-react"

export function BookHero({book}){
    const {isBookSaved, addBook, removeBook } = useSavedBooks()
    const cover = book.covers?.[0]
    ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
    : null

    function handleSave(){
        if (isBookSaved(book.key)) {
            removeBook(book.key)
        }else{
            addBook(book)
        }
    }

    return(
        <div className="flex gap-8 items-start">

            <div className="w-40 h-56 rounded-lg overflow-hidden bg-base-200 flex items-center justify-center">
                {cover ? <img src={cover} alt={book.title} /> : <BookOpen/>}
            </div>

            <div className="flex-1">

                <h1>
                {book.title}
                </h1>

                <p>
                {book.authors?.[0]?.author?.name }
                </p>

                <div>
                <span className="badge badge-ghost">
                    {book.first_publish_year}
                </span>
                <button onClick={(e)=>{
                    handleSave()
                }}>
                {isBookSaved(book.key) ? <BookmarkCheck/> : <Bookmark/>}
                </button>
                </div>
            </div>
        </div>
    )
}