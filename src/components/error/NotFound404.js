import React, { Component } from 'react'
import { Link } from 'react-router'

class NotFound404 extends Component {

  render() {
    return (
      <section className="hero is-fullheight is-unselectable">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1 is-uppercase">
              Lost?
            </h1>
            <h6 className="title is-6 is-uppercase">
              Let's go back to the homepage
            </h6>
            <Link className="is-uppercase" to="/">here</Link>
          </div>
        </div>
      </section>
    )
  }

}

NotFound404.propTypes = {}
NotFound404.contextTypes = {}

export default NotFound404
