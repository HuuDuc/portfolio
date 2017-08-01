import React, { Component } from 'react'
import { Link } from 'react-router'

class Landing extends Component {

  render() {
    return (
      <section className="hero is-fullheight">

        <div class="hero-head">
          <div className="container">ss</div>
        </div>

        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Stephane Nguyen
            </h1>
            <h2 className="subtitle">
              Front-end developer
            </h2>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div class="hero-foot">
          <div className="container">ss</div>
        </div>

      </section>
    )
  }

}

Landing.propTypes = {}
Landing.contextTypes = {}

export default Landing
