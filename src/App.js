import {Route, Routes} from "react-router-dom"
import TopNaviBar from "./Components/Header/TopNaviBar";
import About from './Components/Pages/About/About'
import Work from './Components/Pages/Work/Work'
import Projects from './Components/Pages/Projects/Projects'
import Awards from "./Components/Pages/Awards/Awards";


function App() {
  return (
    <div className="w-full h-screen bg-primary">
      <TopNaviBar/>
    <Routes>
      <Route path="/" element={<About/>} />
      <Route path="/work" element={<Work/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/awards" element={<Awards/>}/>
    </Routes>
  </div>  
  );
}

export default App;
