import React from 'react'
import { Router, browserHistory, IndexRoute, Route } from 'react-router'

import Landing from './components/page/Landing'
import About from './components/page/About'
import Contact from './components/page/Contact'

import NotFound404 from './components/error/NotFound404'

const router = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" pathnames="home">
        <IndexRoute component={Landing} />
        <Route>
          <Route path="about" pathnames="about" component={About} />
          <Route path="contact" pathnames="contact" component={Contact} />
          <Route path="contact" pathnames="contact" component={Contact} />
        </Route>
      </Route>
      <Route path="*" component={NotFound404} />
    </Router>
  )
}

export default router
