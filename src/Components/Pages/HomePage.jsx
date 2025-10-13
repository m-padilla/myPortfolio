import Navbar from "../Header/NavBar";
import SectionContentHeader from "../Header/ShowContentHeader";
import Interests from '../Sections/Interests/About'
import Works from "../Sections/Work/Work"
import Projects from "../Sections/Projects/Projects"
import Footer from '../Footer/Footer'


function HomePage() {
    return (
        <div className="bg-primary w-full">
            <Navbar/>

            <SectionContentHeader/>
            <Interests/>
            <Works/>
            <Projects/>
            <Footer/>
        </div>
    )
}

export default HomePage