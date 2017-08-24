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
      setTimeout(() => this.setState({ show }), 500)
    }
    if (show) {
      this.setState({
        show,
        hide: false
      })
    }
  }

  hide = () => {
    this.setState({ hide: true })
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
          hide
        })}
      >
        <div className="hero-body">
          <div className="container has-text-centered">
            <span className="is-uppercase is-normal is-size-3 is-size-5-mobile">loading</span><br/>
          </div>
        </div>
      </div>
    )
  }

}

Loading.propTypes = {
  show: PropTypes.bool
}

export default Loading
