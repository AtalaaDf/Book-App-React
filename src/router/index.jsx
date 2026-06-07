import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"
import DetailPage from "../pages/DetailPage"
import DiscoverPage from "../pages/DiscoverPage"
import NotFoundPage from "../pages/NotFoundPage"
import PopularPage from "../pages/PopularPage"
import SavedPage from "../pages/SavedPage"
import Layout from "../components/Layout"

function Index(){
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}> 
                <Route path="/" element={<HomePage/>}/>
                <Route path="/discover" element={<DiscoverPage/>}/>
                <Route path="/popular" element={<PopularPage/>}/>
                <Route path="/detail/:id" element={<DetailPage/>}/>
                <Route path="/saved" element={<SavedPage/>}/>
            </Route>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Index