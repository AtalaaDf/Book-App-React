    import { useNavigate } from "react-router-dom"
    import {useSearch} from "../context/SearchContext"
    import { ArrowRight, X } from "lucide-react"

    function SearchPopup(){
        const {keyword, setKeyword, isSearchOpen, toggleSearch} = useSearch()
        const navigate = useNavigate()

            function handleSearch() {
                navigate(`/search/${keyword}`)
                toggleSearch()
            }

        return( 
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <input type="text" value={keyword} onChange={(e) => {setKeyword(e.target.value)}} 
            onKeyDown={e => { if (e.key === 'Enter') handleSearch()}}/>
            <button onClick={handleSearch}><ArrowRight/></button>
            <button onClick={toggleSearch}><X/></button>
            </div>
        )
    }

    export default SearchPopup