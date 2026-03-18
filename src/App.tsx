import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Details from "./pages/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/details/:type/:id" element={<Details />} /> */}
      </Routes>
      <div>
        <h1>MyFilmList Setup Complete! 🎬</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;