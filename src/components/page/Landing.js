import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QueryString from 'query-string'
import classnames from 'classnames'
import ScrollReveal from 'scrollreveal'
import FakeImg from 'react-fakeimg'


import ScrollIcon from '@/common/ScrollIcon'
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

            <div className="hero-foot">
              <div
                className="container is-pos-relative"
                style={{ height: '50px', marginBottom: '40px' }}
              >
                <ScrollIcon />
              </div>
            </div>

        </section>

        <section className="hero is-fullheight blog">
          <div className="hero-body">
            <div className="container">
              <h3 className="title is-3 is-uppercase has-text-centered">blog</h3>
              <h5 className="title is-5 is-uppercase has-text-centered is-normal">博客</h5>
              <p className="has-text-centered is-paragraph">I will try to keep writing and sharing things with all of you.</p>
              <div className="columns is-multiline">
                <div className="column is-4">
                  <a
                    onClick={()=> this.context.router.push('/article/bonjour')}
                  >
                    <FakeImg
                      height={150}
                      width={400}
                      alt="color"
                      bgColor="#e3008c"
                      fontColor="#ffffff"
                      text={'bonjour'.toUpperCase()}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
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
