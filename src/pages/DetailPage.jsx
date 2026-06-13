import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import {fetchBookDetail} from '../api/bookApi'
import {Loading} from '../components/Loading'
import ErrorPage from '../pages/ErrorPage'
import {BookHero} from '../components/Detail/BookHero'
import {BookMeta} from '../components/Detail/BookMeta'
import {BookSubjects} from '../components/Detail/BookSubjects'
import {BookSynopsis} from '../components/Detail/BookSynopsis'
import { ArrowLeft } from "lucide-react"

function DetailPage(){
    const [book, setBook] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
    const loadData = async () => {
        try {
            setLoading(true)
            const data = await fetchBookDetail(id)
            setBook(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    
    loadData()
    }, [id])

    if (loading) return <Loading />

    if (error) return <ErrorPage message={error} />

    return(
        <>
        <button onClick={() => navigate(-1)}>
        <ArrowLeft/>
        </button>
        <BookHero book={book}/>
        <BookMeta book={book}/>
        <BookSubjects book={book}/>
        <BookSynopsis book={book}/>
        </>
    )
}

export default DetailPage