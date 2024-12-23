import ChooseLang from "./pages/chooseLang";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import ClientDetails from "./pages/clientsDetail";
import Length from "./pages/length";
import Shoulder from "./pages/shoulder";
import Arms from "./pages/arms";
import Cuffs from "./pages/cuffs";
import Collar from "./pages/collar";
import Chest from "./pages/chest";
import Fitting from "./pages/fitting";
import Lap from "./pages/lap";
import PantShalwar from "./pages/pantshalwar";
import Paincha from "./pages/paincha";
import AdditionalDetails from "./pages/additionaldetail";
import Congratulations from "./pages/congratulations";
import ChoosePlan from "./pages/choosePlan";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChooseBankAcc from "./pages/chooseBankAcc";
import BankInfo from "./pages/bankInfo";
import ThankYou from "./pages/thankyou";

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
        <Route path="/measurements/shoulder" element={<Shoulder />} />
        <Route path="/measurements/arms" element={<Arms />} />
        <Route path="/measurements/cuffs" element={<Cuffs />} />
        <Route path="/measurements/collar" element={<Collar />} />
        <Route path="/measurements/chest" element={<Chest />} />
        <Route path="/measurements/fitting" element={<Fitting />} />
        <Route path="/measurements/lap" element={<Lap />} />
        <Route path="/measurements/pantshalwar" element={<PantShalwar />} />
        <Route path="/measurements/paincha" element={<Paincha />} />
        <Route
          path="/measurements/additionaldetails"
          element={<AdditionalDetails />}
        />
        <Route path="/congratulations" element={<Congratulations />} />
        <Route path="/chooseplan" element={<ChoosePlan />} />
        <Route path="/choosebankacc" element={<ChooseBankAcc />} />
        <Route path="/bankinfo" element={<BankInfo />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}
export default App;
