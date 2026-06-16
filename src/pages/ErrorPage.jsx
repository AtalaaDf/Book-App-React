import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function ErrorPage({message}){
    const navigate = useNavigate()
    return(
        <div>
        <h1>{message}</h1>
        <button onClick={() => navigate('/')}>
            <ArrowLeft/>
        </button>
        </div>
    )
}

export default ErrorPage