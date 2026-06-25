import { useNavigate } from "react-router-dom"

    const arr = ["Romance", "Fiction", "Non-Fiction", "Mistery",
                "Science-Ficton", "fantasy", "Horror", "History", "Advanture"
     ]

export function CategorySection(){
    const navigate = useNavigate()

    return(
        <div>
        <h1>You can see what Genre u want!</h1>
        {arr.map((genre)=>(
            <button key={genre} onClick={()=>navigate(`/search/${genre}`)}>{genre}</button>
        ))}
        </div>
    )
}