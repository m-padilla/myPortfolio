import NavBar from "./Components/Header/NavBar.jsx"
import About from './Components/Pages/About/About'
import Work from './Components/Pages/Work/Work'
import Projects from './Components/Pages/Projects/Projects'
import Awards from "./Components/Pages/Awards/Awards";
import Footer from "./Components/Footer/Footer.jsx";


function App() {
  return (
    <div className="w-full h-screen bg-primary">
      <NavBar />

      <About />
      <Work />
      <Projects />
      <Awards />

      <Footer/>
    </div>
  );
}

export default App;
