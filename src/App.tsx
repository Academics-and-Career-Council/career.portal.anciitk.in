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
import PrivateRoute from './components/PrivateRoute'
import './App.css';
const Home = lazy(()  => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login')) 
const Register = lazy(() => import('./pages/Register'))
const Reset = lazy(() => import('./pages/Reset'))

function App() {
  const {role} = useRecoilValue(SESSION_STATE)
  
  return (
    <AbacProvider rules={rules} roles={[role]}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/reset' component={Reset} />
            <PrivateRoute component={Home} path='/' />
          </Switch>
        </Suspense>
      </Router>
    </AbacProvider>
  );
}

export default App;
