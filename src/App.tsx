import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./container/Dashboard";
import Openings from "./container/Openings";
import Applications from "./container/Applications";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import CalendarPage from "./pages/CalendarPage";
import JobDescription from "./container/JobDescription";
import Verify from "./pages/Verify";
import "./App.css";
import "@anciitk/kratos-verify-session/dist/index.css"

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute component={Dashboard} path="/dashboard" />
        <PrivateRoute
          // @ts-ignore
          component={JobDescription}
          path="/openings/:id"
        />
        <PrivateRoute component={Openings} path="/openings" />
        <PrivateRoute component={Applications} path="/applications" />
        <PrivateRoute component={Profile} path="/profile" />
        <PrivateRoute component={CalendarPage} path="/calender" />
        <Route path="/verify" component={Verify} />
        <Route path="/" exact>
          <Redirect to="/dashboard" />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
