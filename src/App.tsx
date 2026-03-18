import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main landing page */}
        <Route path="/" element={<Home />} />
        
        {/* Dynamic route for individual movie or tv show details */}
        <Route path="/details/:type/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;