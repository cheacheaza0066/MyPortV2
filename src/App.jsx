
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Page/About";
import Project from "./Page/Project";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
       
        <Route path="/project" element={<Project />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
