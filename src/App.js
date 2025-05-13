import {Route, Routes} from "react-router-dom"
import TopNaviBar from "./Components/Header/TopNaviBar";
import About from './Components/Pages/About/About'
// import Interests from './Components/Pages/Interests/Interests'
// import Work from './Components/Pages/Work/Work'
// import Projects from './Components/Pages/Projects/Projects'


function App() {
  return (
    <div className="w-full h-screen bg-primart">
      <TopNaviBar/>
    <Routes>
      <Route path="/" element={<About/>} />
      {/* <Route path="/interests" element={<Interests/>} />
      <Route path="/work" element={<Work/>} />
      <Route path="/projects" element={<Projects/>} /> */}
    </Routes>
  </div>  
  );
}

export default App;
