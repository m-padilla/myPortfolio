import NavBar from "./Components/Header/NavBar.jsx"
import ShowContentHeader from './Components/Header/ShowContentHeader.jsx'
import About from './Components/Pages/Interests/About.jsx'
import Work from './Components/Pages/Work/Work'
import Projects from './Components/Pages/Projects/Projects';
import Awards from "./Components/Pages/Awards/Awards";
import Footer from "./Components/Footer/Footer.jsx";


function App() {
  return (
    <div className="w-full h-screen bg-grey">
      <NavBar />

      <ShowContentHeader /> 
      <About/>
      <Work />
      <Projects /> 
      <Awards />

      <Footer/>
    </div>
  );
}

export default App;
