import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Landing from './Landing'
import { Link } from 'react-router'

class Contact extends Component {

  render() {
    return (
      <Landing>
        <section
          id="contact"
          className="hero is-fullheight is-unselectable"
        >
          <Link to="/">close</Link>
          Contact
        </section>
      </Landing>
    )
  }

}

Contact.propTypes = {}
Contact.contextTypes = {
  router: PropTypes.object,
}

export default Contact
