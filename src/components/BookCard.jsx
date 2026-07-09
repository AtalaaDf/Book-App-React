import { useNavigate } from "react-router-dom"
import {useSavedBooks} from "../context/SavedBooksContext.jsx"
import { BookOpen, Bookmark, BookmarkCheck } from "lucide-react"
import { motion } from "motion/react"
import { cardVariant } from "../animations/variants.js"


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
        <motion.div
        whileHover={{ y: -8, scale: 1.03 }} 
        transition={{ duration: 0.2 }}
        className="card cursor-pointer rounded-xl overflow-hidden bg-base-100 shadow-sm" 
        onClick={() => navigate(`/detail/${book.key.replace('/works/', '')}`)}>

            <div className="h-48 overflow-hidden">
                {cover ? <img src={cover} alt={book.title} 
                className="h-48 w-full object-cover"
                /> : <div className="h-48 flex items-center justify-center bg-base-200">
                    <BookOpen className="w-12 h-12 text-base-content/30"/>
                     </div>}
            </div>

            <div className="card-body">

                <h3>
                {book.title}
                </h3>

                <p>
                {book.authors?.[0]?.name}
                </p>

                <div className="flex justify-between items-center">
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
        </motion.div>
    )
}

export default BookCard