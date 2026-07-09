    import { useState, useEffect } from "react"
    import { useNavigate, useParams } from "react-router-dom"
    import {Loading} from"../components/Loading"
    import {searchBooks} from"../api/bookApi"
    import ErrorPage from"../pages/ErrorPage"
    import BookCard from "../components/BookCard"
import FadeIn from "../components/FadeIn"

function SearchPage(){
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {keyword} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
    const loadData = async () => {
        try {
            setLoading(true)
            const data = await searchBooks(keyword)
            setBooks(data.docs)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    
    loadData()
    }, [keyword])

        if (loading) return <Loading />

        if (error) return <ErrorPage message={error} />

    return(
            <FadeIn>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((book)=>(
                <BookCard key={book.key} book={book}/>
            ))}
        </div>
            </FadeIn>
    )
}
export default SearchPage