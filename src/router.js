import React from 'react'
import { Router, browserHistory, IndexRoute, Route } from 'react-router'

import Wrapper from '@/Wrapper'

import Landing from './components/page/Landing'
import About from './components/page/About'
import Contact from './components/page/Contact'

import NotFound404 from './components/error/NotFound404'

const router = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" pathnames="home">
        <IndexRoute component={() => {
          return (
            <Wrapper>
              <Landing/>
            </Wrapper>
          )
        }} />
      </Route>
      <Route>
        <Route
          path="about"
          pathnames="about"
          component={() => {
            return (
              <Wrapper>
                <About />
              </Wrapper>
            )
          }}
        />
        <Route
          path="contact"
          pathnames="contact"
          component={() => {
            return (
              <Wrapper>
                <Contact />
              </Wrapper>
            )
          }}
        />
      </Route>
      <Route path="*" component={NotFound404} />
    </Router>
  )
}

export default router
