import {HeroSection} from '../components/Home/HeroSection'
import {CarouselSection} from '../components/Home/CarouselSection'
import {CategorySection} from '../components/Home/CategorySection'
import {AboutSection} from '../components/Home/AboutSection'

function HomePage(){
    return(
        <div>
            <HeroSection/>
            <CarouselSection/>
            <CategorySection/>
            <AboutSection/>
        </div>
    )
}
export default HomePage