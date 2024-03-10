import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NumberScreen from "./pages/NumberScreen/NumberScreen";
import PersonalScreen from "./pages/PersonalScreen/PersonalScreen";
import IdentifyScreen from "./pages/IdentifyScreen/IdentifyScreen";
import PermanentAddress from "./pages/Address/PermanentAddress";
import CurrentAddress from "./pages/Address/CurrentAddress";
import CompanyScreen from "./pages/Company/CompanyScreen";
import Education from "./pages/Education/Education";
import Offer from "./pages/Home/Offer";
import Toasty from "./components/Toasty/Toasty"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/number" component={NumberScreen} />
        <Route path="/personal" component={PersonalScreen} />
        <Route path="/offer" component={Offer} />
        <Route path="/identify" component={IdentifyScreen} />
        <Route path="/current" component={CurrentAddress} />
        <Route path="/permanent" component={PermanentAddress} />
        <Route path="/company" component={CompanyScreen} />
        <Route path="/education" component={Education} />
      </Switch>
      <Toasty />
    </BrowserRouter>
  );
}

export default App;
