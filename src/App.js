import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Components/Pages/HomePage.jsx";
import AboutMe from './Components/Pages/AboutMe.jsx'
import ProjectDetails from './Components/Pages/ProjectDetails.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<AboutMe/>}/>
    <Route path="/work/:name" element={<ProjectDetails/>}/>
    <Route path="/project/:name" element={<ProjectDetails/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
