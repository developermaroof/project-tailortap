import ChooseLang from "./pages/chooseLang";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import ClientDetails from "./pages/clientsDetail";
import Length from "./pages/length";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChooseLang />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/clientdetails" element={<ClientDetails />} />
        <Route path="/measurements/length" element={<Length />} />
      </Routes>
    </Router>
  );
}
export default App;
