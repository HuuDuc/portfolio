import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-fa'
import classnames from 'classnames'

class Footer extends Component {

  render() {

    const { router, pathname } = this.props

    return (
      <div className="hero-foot footer is-hidden-mobile">

        <div className="nav-left">

          <a
            onClick={() => router.push('/about')}
            className={classnames({
              'nav-item': true,
              'is-uppercase': true,
              'is-size-7': true,
              'is-active': pathname === 'about'
            })}
          >
            <span>about me</span>
          </a>

          <a
            onClick={()=> router.push('/contact')}
            className={classnames({
              'nav-item': true,
              'is-uppercase': true,
              'is-size-7': true,
              'is-active': pathname === 'contact'
            })}
          >
            <span>contact</span>
          </a>

          <a
            href="https://huuduc.github.io/react-fakeimg/"
            className="nav-item is-uppercase is-size-7"
          >
            <span>react fakeimg</span>
          </a>

          <a
            href="http://codepen.io/huuduc/"
            className="nav-item"
          >
            <Icon name="codepen" />
          </a>
          <a
            href="https://twitter.com/huuducweb"
            className="nav-item"
          >
            <Icon name="linkedin" />
          </a>
          <a
            href="https://tw.linkedin.com/in/stephanehuuducnguyen"
            className="nav-item"
          >
            <Icon name="twitter" />
          </a>
          <a
            href="https://github.com/HuuDuc"
            className="nav-item"
          >
            <Icon name="github" />
          </a>

        </div>
      </div>
    )
  }

}

Footer.propTypes = {
  router: PropTypes.object,
  pathname: PropTypes.string,
}

export default Footer
