import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QueryString from 'query-string'
import classnames from 'classnames'
import ScrollReveal from 'scrollreveal'
// import Instafeed from 'instafeed.js'

import Loading from '@/Loading'

class Landing extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      caroussel: 0
    }
  }

  componentWillMount() {
    document.title = 'PORTFOLIO 投資組合 | Stéphane Nguyen'
    // const url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=2980218616.5d6e3ce.77e73c5abfe645d690f9e85b3752ed4c'
    // const url = 'https://www.instagram.com/yoyodedongxi/media/'
  }

  componentDidMount() {
    this.setState({ loading: false })
    this.animation()
    setTimeout(() => {
      this.setState({ caroussel: 1 })
      this.startCaroussel()
    }, 1200)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  animation = () => {
    const sr = ScrollReveal()
    sr
      //.reveal('.initial', { delay: 1200 })
      .reveal('.socials', { origin: 'top', delay: 1200, scale: 1, })
      // .reveal('.developer', { origin: 'top', delay: 1200, scale: 1, })
  }

  startCaroussel = () => {
    const self = this
    this.interval = setInterval(() => {
      let { caroussel } = self.state
      caroussel = caroussel === 3 ? 1 : caroussel + 1
      self.setState({ caroussel })
    }, 5000);
  }

  mailTo = () => {
    const params = {
      subject: 'Hello from my website',
      body: 'Your message here'
    }
    document.location.href = `mailto:s.nguyen@outlook.com?${QueryString.stringify(params)}`
  }

  render() {

    const { loading, caroussel } = this.state

    return (
      <div className="landing">

        <section className="first hero is-fullheight">

          <div className="caroussel">
            <div className={classnames({
              show: caroussel === 1
            })} />
            <div className={classnames({
              show: caroussel === 2
            })} />
            <div className={classnames({
              show: caroussel === 3
            })} />
          </div>

          <div className="caroussel-bar is-hidden-mobile">
            <div className={classnames({
              active: caroussel === 1
            })} />
            <div className={classnames({
              active: caroussel === 2
            })} />
            <div className={classnames({
              active: caroussel === 3
            })} />
          </div>

          <div className="hero-body" />

          <p className="paragraph is-size-2 is-size-5-mobile is-uppercase">
            {'love fine design. enjoy working on artistic projects.'}
          </p>

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
