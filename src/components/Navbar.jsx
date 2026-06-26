import { NavLink } from "react-router-dom"
import {useTheme} from "../context/ThemeContext.jsx"
import {useSavedBooks} from "../context/SavedBooksContext.jsx"
import {useSearch} from "../context/SearchContext.jsx"
import { Search, Moon, Sun, Menu, Bookmark } from "lucide-react"
import { useState, useEffect } from "react"

function Navbar(){
    const { isDark, toggleTheme } = useTheme()
    const { savedBooks } = useSavedBooks()
    const { toggleSearch } = useSearch()
    const [scroll, setScroll] = useState(0)
    const progress = Math.min(scroll / 200, 1)
    const opacity = 1 - (progress * 0.7)
    const width = 100 - (progress * 70)

    useEffect(() => {
    function handleScroll() {
       setScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
}, [])

    return(
        <nav 
            className="navbar sticky bg-base-100 shadow-sm fixed top-0 left-0 right-0 transition-all duration-300 z-10"
            style={{ opacity: opacity, width: `${width}%`, margin: '0 auto' }}
        >

            <div className="navbar-start">
                <NavLink 
                    to="/"
                    className={"font-bold text-2xl"}>
                        Books
                </NavLink>
            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal">
                    <li>
            <NavLink 
                to="/discover"
                className={({ isActive }) => isActive ? "font-bold text-primary" : ""}>
                Discover
            </NavLink>
                    </li>

                    <li>
            <NavLink 
                to="/popular"
                className={({ isActive }) => isActive ? "font-bold text-primary" : ""}>
                Popular
            </NavLink>
                    </li>

                    <li>
            <NavLink 
                to="/saved"
                className={({ isActive }) => isActive ? "font-bold text-primary" : ""}>
                Saved
            </NavLink>
                    </li>
                </ul>

            </div>

            <div className="navbar-end">
            <button className="btn btn-ghost btn-circle" onClick={toggleSearch}>
                <Search></Search>
            </button>

            <button className="btn btn-ghost btn-circle" onClick={toggleTheme}>
                {isDark ? <Sun/> : <Moon/>}
            </button>
            
            <button className="btn btn-ghost btn-circle md:hidden">
                <Menu/>
            </button>

            </div>

        </nav>
    )
}

export default Navbar