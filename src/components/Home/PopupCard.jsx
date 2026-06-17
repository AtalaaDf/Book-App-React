import { useNavigate } from "react-router-dom"
import { X } from "lucide-react"

export function PopupCard({book, onClose}){
    const navigate = useNavigate()

    return(
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <h3>{book.title}</h3>
            <p>
                {book.description}
            </p>
            <button onClick={onClose}>
                <X/>
            </button>
            <button onClick={()=>  navigate(`/detail/${book.key.replace('/works/', '')}`)}>
                Selengkapnya
            </button>
        </div>
    )
}