import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-fa'
import QueryString from 'query-string'
import classnames from 'classnames'
import ScrollReveal from 'scrollreveal'
// import Particles from 'react-particles-js'


import ScrollIcon from '@/common/ScrollIcon'
import Loading from '@/Loading'

class Landing extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentWillMount() {
    document.title = 'Portfolio | Stéphane Nguyen'
  }

  componentDidMount() {
    this.setState({ loading: false })
    this.animation()
  }

  animation = () => {
    const sr = ScrollReveal()
    sr
      .reveal('.initial', { delay: 1200 })
      .reveal('.socials', { origin: 'top', delay: 1200, scale: 1, })
      .reveal('.developer', { origin: 'top', delay: 1200, scale: 1, })
  }

  mailTo = () => {
    const params = {
      subject: 'Hello from my website',
      body: 'Your message here'
    }
    document.location.href = `mailto:s.nguyen@outlook.com?${QueryString.stringify(params)}`
  }

  render() {

    // const { router } = this.context
    const { loading } = this.state

    return (
      <div className="landing">

        <section className="first hero is-fullheight">

          <div className={classnames({
              initial: true,
              show: !loading
            })}
          >
            <img
              src={require('+/initial.png')}
              alt="Stephane Nguyen"
            />
          </div>

          <div className={classnames({
              developer: true,
              'is-hidden-mobile': true,
              show: !loading
            })}
          >
            <img
              src={require('+/frontenddeveloper.png')}
              alt="front-end developer"
            />
          </div>

          <div className={classnames({
              socials: true,
              'has-text-centered': true,
              'is-hidden-mobile': true,
              show: !loading
            })}
          >
            <p><a href="https://twitter.com/huuducweb"><Icon name="twitter"/></a></p>
            <p><a href="http://www.linkedin.com/in/stephanehuuducnguyen"><Icon name="linkedin"/></a></p>
            <p><a href="https://github.com/HuuDuc"><Icon name="github"/></a></p>
            <div className="bar">{String.fromCharCode(124)}</div>
            <p><a onClick={this.mailTo}><Icon name="paper-plane"/></a></p>
          </div>

          <div className="hero-body" />

          <div className="hero-foot">
            <div
              className="container is-pos-relative"
              style={{ height: '50px', marginBottom: '40px' }}
            >
              <ScrollIcon />
            </div>
          </div>

        </section>
        <section className="hero is-fullheight is-primary">

          <div className="hero-body">landing page</div>

        </section>

        <Loading show={loading} />

      </div>
    )
  }

}

Landing.propTypes = {}
Landing.contextTypes = {
  router: PropTypes.object,
};

export default Landing
