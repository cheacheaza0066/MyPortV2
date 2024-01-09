
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Page/About";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
       

      </Routes>
    </BrowserRouter>
  );
}

export default App;
