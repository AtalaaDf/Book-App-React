    import { useState, useEffect } from "react"
    import { useNavigate, useParams } from "react-router-dom"
    import {Loading} from"../components/Loading"
    import {searchBooks} from"../api/bookApi"
    import ErrorPage from"../pages/ErrorPage"
    import BookCard from "../components/BookCard"
    import { motion } from "motion/react"
    import { cardVariant, staggerContainer } from "../animations/variants"

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
        <motion.div 
         variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((book)=>(
                <motion.div key={book.key} variants={cardVariant}>
                    <BookCard book={book}/>
                </motion.div>
            ))}
        </motion.div>
    )
}
export default SearchPage