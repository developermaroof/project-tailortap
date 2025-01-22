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
import ChooseBankAcc from "./pages/chooseBankAcc";
import BankInfo from "./pages/bankInfo";
import ThankYou from "./pages/thankyou";
import Search from "./pages/search";
import Nav from "./components/nav";
import ClientsData from "./pages/clientsData";
import Upload from "./pages/upload";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClientProvider } from "./contexts/clientContext";
import { useAuth } from "./contexts/authContext";
import Settings from "./pages/settings";
import Admin from "./pages/admin";

function App() {
  const { currentUser } = useAuth();
  const userId = currentUser ? currentUser.uid : null;

  return (
    <ClientProvider userId={userId}>
      <Router>
        <Routes>
          <Route path="/" element={<ChooseLang />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/homepage"
            element={
              <div className="flex flex-col items-center justify-center">
                <Home />
                <Nav />
              </div>
            }
          />

          <Route
            path="/clientdetails"
            element={
              <div className="flex flex-col items-center justify-center">
                <ClientDetails />
                <Nav />
              </div>
            }
          />
          <Route
            path="/measurements/length"
            element={
              <div className="flex flex-col items-center justify-center">
                <Length />
                <Nav />
              </div>
            }
          />
          <Route
            path="/measurements/shoulder"
            element={
              <div className="flex flex-col items-center justify-center">
                <Shoulder />
                <Nav />
              </div>
            }
          />
          <Route
            path="/measurements/arms"
            element={
              <div className="flex flex-col items-center justify-center">
                <Arms />
                <Nav />
              </div>
            }
          />
          <Route
            path="/measurements/cuffs"
            element={
              <div className="flex flex-col items-center justify-center">
                <Cuffs />
                <Nav />
              </div>
            }
          />
          <Route
            path="/measurements/collar"
            element={
              <div className="flex flex-col items-center justify-center">
                <Collar />
                <Nav />
              </div>
            }
          />
          <Route
            path="/measurements/chest"
            element={
              <div className="flex flex-col items-center justify-center">
                <Chest />
                <Nav />
              </div>
            }
          />
          <Route
            path="/measurements/fitting"
            element={
              <div className="flex flex-col items-center justify-center">
                <Fitting />
                <Nav />
              </div>
            }
          />
          <Route
            path="/measurements/lap"
            element={
              <div className="flex flex-col items-center justify-center">
                <Lap />
                <Nav />
              </div>
            }
          />
          <Route
            path="/measurements/pantshalwar"
            element={
              <div className="flex flex-col items-center justify-center">
                <PantShalwar />
                <Nav />
              </div>
            }
          />
          <Route
            path="/measurements/paincha"
            element={
              <div className="flex flex-col items-center justify-center">
                <Paincha />
                <Nav />
              </div>
            }
          />
          <Route
            path="/measurements/upload"
            element={
              <div className="flex flex-col items-center justify-center">
                <Upload />
                <Nav />
              </div>
            }
          />
          <Route
            path="/measurements/additionaldetails"
            element={
              <div className="flex flex-col items-center justify-center">
                <AdditionalDetails />
                <Nav />
              </div>
            }
          />
          <Route path="/congratulations" element={<Congratulations />} />
          <Route path="/chooseplan" element={<ChoosePlan />} />
          <Route path="/choosebankacc" element={<ChooseBankAcc />} />
          <Route path="/bankinfo" element={<BankInfo />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route
            path="/search"
            element={
              <div className="flex flex-col items-center justify-center">
                <Search />
                <Nav />
              </div>
            }
          />
          <Route
            path="/search/clientsdata/:clientid"
            element={
              <div className="flex flex-col items-center justify-center">
                <ClientsData />
                <Nav />
              </div>
            }
          />
          <Route
            path="/settings"
            element={
              <div className="flex flex-col items-center justify-center">
                <Settings />
                <Nav />
              </div>
            }
          />
          <Route
            path="/admin"
            element={
              <div className="flex flex-col items-center justify-center">
                <Admin />
                <Nav />
              </div>
            }
          />
        </Routes>
      </Router>
    </ClientProvider>
  );
}
export default App;
