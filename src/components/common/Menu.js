import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import QueryString from 'query-string'

import Icon from 'react-fa'

class Menu extends Component {

  mailTo = () => {
    const params = {
      subject: 'Hello from my website',
      body: 'Your message here'
    }
    document.location.href = `mailto:s.nguyen@outlook.com?${QueryString.stringify(params)}`
  }

  render() {
    const { show } = this.props
    const { router } = this.context

    document
      .getElementsByTagName('body')[0]
      .style
      .overflowY = show ? 'hidden' : 'initial'


    return (
      <div className={classnames({
        'menu-container': true,
        show
      })}>
        <section className="hero is-fullheight is-dark">
          <div className="hero-body">
            <div className="container is-fluid">
              <div className="columns">
                <div
                  className="main-content column"
                >
                  <ul>
                    <li className="is-uppercase">
                      <a
                        onClick={() => router.push('/about')}
                        className="is-size-2 is-size-4-mobile"
                      >
                        about <span className="is-lighter">/ 關於我</span>
                      </a>
                    </li>
                    <li className="is-uppercase">
                      <a
                        onClick={() => router.push('/blog')}
                        className="is-size-2 is-size-4-mobile"
                      >
                        blog <span className="is-lighter">/ 博客</span>
                      </a>
                    </li>
                    <li className="is-uppercase">
                      <a
                        onClick={() => router.push('/contact')}
                        className="is-size-2 is-size-4-mobile"
                      >
                        contact <span className="is-lighter">/ 聯絡</span>
                      </a>
                    </li>
                  </ul>

                  <p className="is-hidden-desktop is-hidden-widescreen no-letter-spacing is-separation">{String.fromCharCode(8212).repeat(5)}</p>

                  <div className="socials-container columns is-mobile is-hidden-desktop is-hidden-tablet is-hidden-widescreen">
                    <div className="column is-2">
                      <a href="https://twitter.com/huuducweb"><Icon name="twitter"/></a>
                    </div>
                    <div className="column is-2">
                      <a href="http://www.linkedin.com/in/stephanehuuducnguyen"><Icon name="linkedin"/></a>
                    </div>
                    <div className="column is-2">
                      <a href="https://github.com/HuuDuc"><Icon name="github"/></a>
                    </div>
                    <div className="column is-2">
                      <a onClick={this.mailTo}><Icon name="paper-plane"/></a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="hero-foot is-hidden-mobile">

            <div className="container is-fluid">

              <div className="columns is-gapless">
                <div className="column">
                  <div className="socials-container is-gapless is-hidden-mobile">
                    <a className="is-size-3" href="https://twitter.com/huuducweb"><Icon name="twitter"/></a>
                    <a className="is-size-3" href="http://www.linkedin.com/in/stephanehuuducnguyen"><Icon name="linkedin"/></a>
                    <a className="is-size-3" href="https://github.com/HuuDuc"><Icon name="github"/></a>
                    <a className="is-size-3" onClick={this.mailTo}><Icon name="paper-plane"/></a>
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
Menu.contextTypes = {
  router: PropTypes.object,
};

export default Menu
