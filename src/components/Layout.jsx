import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {useTheme} from "../context/ThemeContext"

function Layout(){
    const { isDark } = useTheme()
    return(
        <div data-theme={isDark ? "dark" : "light"}>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </div>
    )
}
export default Layout