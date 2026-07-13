import { useState, useEffect } from "react"
import {Loading} from"../components/Loading"
import {fetchPopularBooks} from"../api/bookApi"
import ErrorPage from"../pages/ErrorPage"
import BookCard from "../components/BookCard"
import { ArrowLeft, ArrowRight } from "lucide-react"
import FadeIn from "../components/FadeIn"
import { motion } from "motion/react"
import { cardVariant, staggerContainer } from "../animations/variants"

function PopularPage(){
        const [books, setBooks] = useState([])
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(null)
        const [currentPage, setCurrentPage] = useState(1)
        const [totalPage, setTotalPage] = useState(0)

    useEffect(() => {
    const loadData = async () => {
        try {
            setLoading(true)
            const data = await fetchPopularBooks(currentPage)
            setBooks(data.works)
            setTotalPage(Math.ceil(data.numFound / 12))
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    
    loadData()
    }, [currentPage])

    if (loading) return <Loading />

    if (error) return <ErrorPage message={error} />

    return( 
    <div>
        <FadeIn>
        <h2>Popular Books</h2>
        </FadeIn>

        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((book)=>(
                <motion.div 
                variants={cardVariant}
                 key={book.key}>
                    <BookCard book={book}/>
                </motion.div>
            ))}
        </motion.div>

                <FadeIn>
            <div className="join">
                <button onClick={() => setCurrentPage(currentPage -1)} disabled={currentPage === 1}>
                    <ArrowLeft/>
                </button>

                {Array.from({length: totalPage}, (_, i) => i +1)
                .map((page)=>(
                    <button key={page} className={`join-item btn ${page === currentPage ? "btn-active" : ""}`}
                    onClick={() => setCurrentPage(page)}>
                    {page}
                </button>
                ))}
                
                <button onClick={()=>setCurrentPage(currentPage +1)} disabled={currentPage === totalPage}>
                    <ArrowRight/>
                </button>
            </div>
                </FadeIn>

    </div>
    )
}

export default PopularPage