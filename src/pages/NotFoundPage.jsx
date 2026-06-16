import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function NotFoundPage(){
    const navigate = useNavigate()

    return(
        <div>
        <h1>404 Not Found</h1>
        <button onClick={() => navigate('/')}>
            <ArrowLeft/>
        </button>
        </div>
    )
}

export default NotFoundPage