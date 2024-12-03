import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./coponents/home.jsx";
 
import NavBar from "./coponents/navBar/index.jsx";
function App() {
  return (
    <div className="h-screen bg-red-100" >
      
        <NavBar/>
        
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
 
    </div>
  );
}

export default App;
