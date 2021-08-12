import {lazy, Suspense} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {AbacProvider} from 'react-abac'
import {useRecoilValue} from 'recoil'

import {rules} from './services/abac'
import {SESSION_STATE} from './store'
import Loader from './components/loader'
import './App.css';
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Login = lazy(() => import('./pages/Login'))
const Openings = lazy(() => import('./pages/Openings'))
const Applications = lazy(() => import('./pages/Applications'))
const Profile = lazy(() => import('./pages/Profile'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  const {role} = useRecoilValue(SESSION_STATE)
  
  return (
    <AbacProvider rules={rules} roles={[role]}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route component={Dashboard} path='/dashboard' />
            <Route component={Openings} path="/openings" />
            <Route component={Applications} path="/applications" />
            <Route component={Profile} path="/profile" />
            <Route component={Login} path="/" exact/>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </AbacProvider>
  );
}

export default App;
