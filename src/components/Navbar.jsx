import { NavLink } from "react-router-dom"
import {useTheme} from "../context/ThemeContext.jsx"
import {useSavedBooks} from "../context/SavedBooksContext.jsx"
import {useSearch} from "../context/SearchContext.jsx"
import { Search, Moon, Sun, Menu, Bookmark } from "lucide-react"

function Navbar(){
    const { isDark, toggleTheme } = useTheme()
    const { savedBooks } = useSavedBooks()
    const { toggleSearch } = useSearch()
    return(
        <nav className="navbar bg-base-100 shadow-sm">

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