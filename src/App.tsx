import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AbacProvider } from "react-abac";
import { useRecoilValue } from "recoil";

import { rules } from "./services/abac";
import { SESSION_STATE } from "./store";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Openings from "./pages/Openings";
import Applications from "./pages/Applications";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import CalendarPage from "./pages/CalendarPage";
import "./App.css";
import JobDescription from "./pages/JobDescription";

function App() {
  const { role } = useRecoilValue(SESSION_STATE);

  return (
    <AbacProvider rules={rules} roles={[role]}>
      <Router>
        <Switch>
          <Route component={Dashboard} path="/dashboard" />
          <Route component={JobDescription} path='/openings/:id' />
          <Route component={Openings} path="/openings" />
          <Route component={Applications} path="/applications" />
          <Route component={Profile} path="/profile" />
          <Route component={CalendarPage} path="/calender" />
          <Route component={Landing} path="/" exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AbacProvider>
  );
}

export default App;
