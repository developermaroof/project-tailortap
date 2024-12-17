import ChooseLang from "./components/chooseLang";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChooseLang />} />
      </Routes>
    </Router>
  );
}
export default App;
