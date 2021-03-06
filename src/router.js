import React from 'react'
import { Router, browserHistory, IndexRoute, Route } from 'react-router'

import Wrapper from '@/Wrapper'

import Landing from './components/page/Landing'
import About from './components/page/About'
import Contact from './components/page/Contact'
import Blog from './components/page/Blog'


import Bonjour from './components/page/articles/Bonjour'

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
          path="blog"
          pathnames="blog"
          component={() => {
            return (
              <Wrapper>
                <Blog />
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
        {
          [
            {
              slug: 'bonjour',
              component: Bonjour
            }
          ].map(article => {
            return (
              <Route
                key={article.slug}
                path={`article/${article.slug}`}
                pathnames={article.slug}
                component={() => {
                  return (
                    <Wrapper>
                      {React.createElement(article.component)}
                    </Wrapper>
                  )
                }}
              />
            )
          })
        }
      </Route>
      <Route path="*" component={NotFound404} />
    </Router>
  )
}

export default router
