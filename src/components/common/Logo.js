import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Logo extends Component {

  render() {
    const { show } = this.props
    return (
      <h1 className={classnames({
        logo: true,
        'is-uppercase': true,
        title: true,
        'is-3': true,
        'is-size-4-mobile': true,
        show
      })}>
        <span className="is-hidden-mobile">stephane nguyen</span>
        <span className="is-hidden-dekstop is-hidden-tablet is-hidden-widescreen">sn.</span>
      </h1>
    )
  }

}

Logo.propTypes = {
}

export default Logo
