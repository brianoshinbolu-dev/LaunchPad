import "bootstrap/dist/css/bootstrap.min.css";
import { Header, Footer } from "./components";
import {Home, FE} from "./Pages"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div >
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Frontend" element={<FE />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
