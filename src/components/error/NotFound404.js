import React, { Component } from 'react'
import { Link } from 'react-router'

class NotFound404 extends Component {

  componentDidMount() {
    document
      .getElementsByTagName('html')[0]
      .style
      .overflow = 'hidden'
  }

  componentWillUnmount() {
    document
      .getElementsByTagName('html')[0]
      .style
      .overflowY = 'initial'
  }

  render() {
    return (
      <section
        className="error-404 hero is-fullheight is-unselectable"
        style={{ backgroundImage: `url('${require('+/no-where-compressor.jpg')}')` }}
      >
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1 is-size-2-mobile is-uppercase is-normal">
              Lost?
            </h1>
            <p className="is-size-6 is-uppercase">
              Let's go back to the homepage<br/>
              <Link className="is-uppercase is-bold" to="/">here</Link>
            </p>
          </div>
        </div>
      </section>
    )
  }

}

NotFound404.propTypes = {}
NotFound404.contextTypes = {}

export default NotFound404
