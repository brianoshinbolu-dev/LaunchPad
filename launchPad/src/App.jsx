import "bootstrap/dist/css/bootstrap.min.css";
import { Header, Footer } from "./components";
import {Home} from "./Pages"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
