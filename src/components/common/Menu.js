import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Icon from 'react-fa'

class Menu extends Component {

  render() {
    const { show } = this.props
    return (
      <div className={classnames({
        'menu-container': true,
        show
      })}>
        <section className="hero is-fullheight is-dark">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div
                  className="main-content column is-3 is-offset-5"
                >
                  <ul>
                    <li className="is-uppercase">
                      <a className="is-size-4 is-size-5-mobile">
                        about
                      </a>
                    </li>
                    <li className="is-uppercase">
                      <a
                        href="https://huuduc.github.io/react-fakeimg/"
                        className="is-size-4 is-size-5-mobile"
                      >
                        react fakeimg
                      </a>
                    </li>
                    <li className="is-uppercase">
                      <a
                        href="https://huuduc.github.io/react-fakeimg/"
                        className="is-size-4 is-size-5-mobile"
                      >
                        chain validator
                      </a>
                    </li>
                    <li className="is-uppercase">
                      <a className="is-size-4 is-size-5-mobile">
                        contact
                      </a>
                    </li>
                  </ul>

                  <p className="no-letter-spacing is-separation">{String.fromCharCode(8212).repeat(5)}</p>

                  <div className="columns is-hidden-mobile">
                    <div className="column is-2">
                      <a href="https://twitter.com/huuducweb"><Icon name="twitter"/></a>
                    </div>
                    <div className="column is-2">
                      <a href="https://twitter.com/huuducweb"><Icon name="linkedin"/></a>
                    </div>
                    <div className="column is-2">
                      <a href="https://twitter.com/huuducweb"><Icon name="github"/></a>
                    </div>
                  </div>

                  <div className="columns is-mobile is-hidden-desktop is-hidden-tablet is-hidden-widescreen">
                    <div className="column is-2">
                      <a href="https://twitter.com/huuducweb"><Icon name="twitter"/></a>
                    </div>
                    <div className="column is-2">
                      <a href="https://twitter.com/huuducweb"><Icon name="linkedin"/></a>
                    </div>
                    <div className="column is-2">
                      <a href="https://twitter.com/huuducweb"><Icon name="github"/></a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

}

Menu.propTypes = {
}

export default Menu
