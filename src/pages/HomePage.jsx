import {HeroSection} from '../components/Home/HeroSection'
import {CarouselSection} from '../components/Home/CarouselSection'
import {CategorySection} from '../components/Home/CategorySection'
import {AboutSection} from '../components/Home/AboutSection'
import FadeIn from '../components/FadeIn'

function HomePage(){
    return(
        <div>
            <FadeIn><HeroSection/></FadeIn>
            <FadeIn><CarouselSection/></FadeIn>
            <FadeIn><CategorySection/></FadeIn>
            <FadeIn><AboutSection/></FadeIn>
        </div>
    )
}
export default HomePage