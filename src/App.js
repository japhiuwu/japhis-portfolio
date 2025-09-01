import "./styles/App.css";
import Bg from "./Bg";
import Portfolio from "./Portfolio";
import Config from "./Config";
import Home from "./Home";
import Info from "./Info";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Bg>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/info" element={<Info />} />
          <Route path="/configuration" element={<Config />} />
        </Routes>
      </BrowserRouter>
    </Bg>
  );
}

export default App;
