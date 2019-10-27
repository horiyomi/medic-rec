import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './features/Auth/Login'
import Register from './features/Auth/Register'
import Dashboard from './shared/Layout/Layout'
import Welcome from './features/Landing'

const App = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Welcome}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/home" component={Dashboard}/>

    </Switch>
  )
}

export default App