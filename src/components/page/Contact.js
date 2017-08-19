import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Contact extends Component {

  render() {

    // const { router } = this.context

    return (
      <section
        id="contact"
        className="hero is-fullheight is-unselectable"
        className={classnames({
          'hero': true,
          'is-fullheight': true,
          'is-unselectable': true,
        })}
      >
        contact
      </section>
    )
  }

}

Contact.propTypes = {}
Contact.contextTypes = {
  router: PropTypes.object,
}

export default Contact
