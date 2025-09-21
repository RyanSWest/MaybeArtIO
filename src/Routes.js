




import { Router,Routes,Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Grid from './Grid';
function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to='/grid'>Gallery</Link>
       </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path= "/grid" element ={<Grid/>}/>
       </Routes>
    </BrowserRouter>
  );
}