import {useSavedBooks} from "../context/SavedBooksContext"
import BookCard from "../components/BookCard"
import FadeIn from "../components/FadeIn"

function SavedPage(){
    const { savedBooks } = useSavedBooks()
    if(savedBooks.length === 0){
        return <p>Buku belum tersimpan</p>
    }
    return(
        <FadeIn>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {savedBooks.map((book) => (
            <BookCard key={book.key} book={book}/>
        ))}
        </div>
        </FadeIn>
    )
}

export default SavedPage