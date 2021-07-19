import React from 'react'
import {Route, RouteComponentProps, Redirect} from 'react-router-dom'
import {useRecoilValue} from 'recoil'

import {SESSION_STATE} from '../store'

const {Fragment} = React

const PrivateRoute = (props: {
  component: React.ComponentType<RouteComponentProps>,
  path: string
}) => {
  const { active } = useRecoilValue(SESSION_STATE)
  const {component: Component, path, ...rest} = props

  return (
    <Fragment>
      <Route 
        {...rest}
        path={path}
        render={(props) => {
          return active ? (
            <Component {...props} />
          ) : (
            <Redirect to={{pathname: "/login"}} />
          )
        }}
      />
    </Fragment>
  )
}

export default PrivateRoute