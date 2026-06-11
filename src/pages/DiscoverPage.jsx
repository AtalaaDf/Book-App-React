import { useState, useEffect } from "react"
import {Loading} from"../components/Loading"
import {fetchTrendingBooks} from"../api/bookApi"
import ErrorPage from"../pages/ErrorPage"

function DiscoverPage(){
        const [books, setBooks] = useState([])
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(null)
        const [currentPage, setCurrentPage] = useState(1)
        const [totalPage, setTotalPage] = useState(0)

    useEffect(() => {
    const loadData = async () => {
        try {
            setLoading(true)
            const data = await fetchTrendingBooks(currentPage)
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
    <div>tampilkan books disini</div>
    )
}

export default DiscoverPage