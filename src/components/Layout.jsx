import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar"
import SearchPopup from "../components/SearchPopup"
import Footer from "../components/Footer"
import {useTheme} from "../context/ThemeContext"
import {useSearch} from "../context/SearchContext"

function Layout(){
    const { isDark } = useTheme()
    const { isSearchOpen } = useSearch()

    return(
        <div data-theme={isDark ? "dark" : "light"}>
        <Navbar/>
        {isSearchOpen && <SearchPopup/>}
        <Outlet/>
        <Footer/>
        </div>
    )
}
export default Layout