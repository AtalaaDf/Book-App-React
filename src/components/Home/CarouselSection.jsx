import { useEffect, useState } from "react"
import {Loading} from '../../components/Loading'
import {fetchTrendingBooks} from '../../api/bookApi'
import {PopupCard} from './PopupCard'
import ErrorPage from '../../pages/ErrorPage'

export function CarouselSection(){
        const [books, setBooks] = useState([])
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(null)
        const [selectedBook, setSelectedBook] = useState(null)

        useEffect(() => {
            const loadData = async () => {
                try {
                    setLoading(true)
                    const data = await fetchTrendingBooks()
                    setBooks(data.works)
                } catch (error) {
                    setError(error.message)
                } finally {
                    setLoading(false)
                }
            }
            
            loadData()
            }, [])

            if (loading) return <Loading />

            if (error) return <ErrorPage message={error} />

    return(
        <div>
        <h2>Judul Section</h2>
        <div className="flex gap-4 overflow-x-auto">
            {books.map((book) => (
                <div 
                    key={book.key}
                    onClick={() => setSelectedBook(book)}
                >
                    <p>{book.title}</p>
                </div>
            ))}
        </div>

        {selectedBook && <PopupCard book={selectedBook} onClose={() => setSelectedBook(null)}/>}
    </div>
    )
}