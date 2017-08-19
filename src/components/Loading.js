import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

class Loading extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: true,
      hide: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { show } = nextProps
    if (!show) {
      setTimeout(() => this.setState({ show }), 1000)
    }
    if (show) {
      this.setState({
        show,
        hide: false
      })
    }
  }

  hide = () => {
    setTimeout(() => this.setState({ hide: true }), 500)
  }

  render() {
    const { show, hide } = this.state

    if (!show && !hide) {
      this.hide()
    }

    return (
      <div
        className={classnames({
          'hero': true,
          'is-fullheight': true,
          'loading': true,
          show,
          hide
        })}
      >
        <div className="hero-body">
          <div className="container has-text-centered">
            <span className="is-uppercase is-bold">loading</span>
          </div>
        </div>
      </div>
    )
  }

}

Loading.propTypes = {
}

export default Loading
