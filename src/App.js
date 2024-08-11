import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Navbar from "./components/navbar/Navbar";

import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import Error from "./Pages/Error";

import './styles/main.css';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <ScrollToTop /> */}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Characters" element={<Characters />} />
          <Route path="/Error" element={<Error />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
