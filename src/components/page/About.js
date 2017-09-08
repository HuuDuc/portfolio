import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ScrollReveal from 'scrollreveal'

import Loading from '@/Loading'
import ScrollIcon from '@/common/ScrollIcon'
import Footer from '@/common/Footer'

const instaFeeds = require('+/data/insta.json')

class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentWillMount() {
    document.title = 'ABOUT 關於我 | Stéphane Nguyen'
  }

  componentDidMount() {
    this.setState({ loading: false })
    this.animation()
  }

  animation = () => {
    const sr = ScrollReveal()
    sr
      .reveal('.intro h1', { origin: 'top', delay: 800, scale: 1 }, 500)
      .reveal('.intro h4', { origin: 'left', delay: 800, scale: 1 }, 500)
      .reveal('.intro .columns', { origin: 'right', delay: 800, scale: 1 }, 500)
      .reveal('.paris', { origin: 'left', delay: 500, scale: 1 }, 500)
      .reveal('.taipei', { origin: 'right', delay: 500, scale: 1 }, 500)

      .reveal('.hero.whatcanido h3', { origin: 'left', delay: 500, scale: 1 }, 100)
      .reveal('.hero.whatcanido p.has-text-centered', { origin: 'right', delay: 500, scale: 1 }, 100)
      .reveal('.hero.whatcanido p.is-uppercase', { origin: 'left', delay: 500, scale: 1 }, 100)
      .reveal('.hero.whatcanido .columns .column', { delay: 500, scale: 1 }, 100)

      .reveal('.hero.numbers h3', { origin: 'left', delay: 500, scale: 1 }, 100)
      .reveal('.hero.numbers p.has-text-centered', { origin: 'right', delay: 500, scale: 1 }, 100)
      .reveal('.hero.numbers .columns .column', { delay: 500, scale: 1 }, 100)

      .reveal('.instafeeds', { delay: 500, scale: 1 }, 100)
      .reveal('.instafeeds img', { origin: 'right', delay: 600, scale: 1 }, 150)

      .reveal('.contact p', { origin: 'left', delay: 600, scale: 1 })
  }

  render() {

    const { loading } = this.state
    const feeds = instaFeeds.items.slice(0, 18)

    return (
      <div className="about-page">

        <section className="intro hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h1 className="has-text-centered title is-1 is-size-2-mobile is-uppercase">
                about
              </h1>
              <h4 className="has-text-centered subtitle is-3 is-size-4-mobile">
                關於我
              </h4>
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <p className="is-paragraph has-text-centered">
                    {'Who am I ? I am Stéphane Nguyen, a french front-end developer with over 9 years experiences in the web industry.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-foot">
            <div
              className="container is-pos-relative"
              style={{ height: '50px', marginBottom: '40px' }}
            >
              <ScrollIcon />
            </div>
          </div>

        </section>

        <section className="hero is-fullheight whatcanido">

          <div className="hero-body columns">
            <div className="column">

              <p className="has-text-centered">
                <img alt="ampoule" src={require('+/ampoule.jpg')}/>
              </p>

              <h3 className="title is-3 is-uppercase has-text-centered">what can i do</h3>
              <p className="is-paragraph has-text-centered">With almost 10 years experiences, I have gotten a lot of skills</p>


              <div className="columns">
                <div className="column has-text-centered has-text-left-mobile list">
                  <p className="is-uppercase is-size-7-mobile">
                    <strong>virtualization / </strong>
                    vagrant / virtualbox
                  </p>
                  <p className="is-uppercase is-size-7-mobile">
                    <strong>dabatase / </strong>
                    postgresql / mysql / sqlserver
                  </p>
                  <p className="is-uppercase is-size-7-mobile">
                    <strong>front-end / </strong>
                    rwd / html5 / css3 / scss / js / jquery / es6 / react / webpack / gulp
                  </p>
                  <p className="is-uppercase is-size-7-mobile">
                    <strong>back-end / </strong>
                    php7 / symfony 2 / codeigniter / laravel / nodejs / express
                  </p>
                  <p className="is-uppercase is-size-7-mobile">
                    <strong>server / </strong>
                    apache / nginx / ubuntu / debian
                  </p>
                  <p className="is-uppercase is-size-7-mobile">
                    <strong>version control / </strong>
                    git / svn
                  </p>
                </div>
              </div>

            </div>
          </div>

        </section>

        <section className="hero is-fullheight countries">

          <div className="content">
            <div className="container">
              <div className="columns">
                <div className="column paris is-flex-center-column">
                  <div className="has-text-centered">
                    <h3 className="title is-3 is-uppercase">paris, france</h3>
                    <h5 className="title is-5 is-uppercase">法國巴黎</h5>
                    <p className="is-paragraph">{'where I was born and I come from'}</p>
                  </div>
                </div>
                <div className="column taipei is-flex-center-column">
                  <div className="has-text-centered">
                    <h3 className="title is-3 is-uppercase">taipei, taiwan</h3>
                    <h5 className="title is-5 is-uppercase">臺灣臺北</h5>
                    <p className="is-paragraph">{'where I am currently living'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="numbers hero is-fullheight">
          <div className="hero-body">
            <div className="container">

              <p className="has-text-centered">
                <img alt="ampoule" src={require('+/numbers.jpg')}/>
              </p>
              <h3 className="title is-3 is-size-4-mobile is-uppercase has-text-centered">few numbers</h3>
              <p
                className="has-text-centered is-paragraph"
                dangerouslySetInnerHTML={{ __html: 'Most of the time, numbers are more accurate and efficient to know something or someone.' }}
              />
            <div className="columns">
                <div className="is-pos-relative column has-text-centered">
                  <p className="title is-5 is-size-6-mobile is-uppercase is-bold">
                    experiences (year)
                    <br/>
                    <span>經驗（年）</span>
                  </p>
                  <p className="is-size-1">9</p>
                </div>
                <div className="is-pos-relative column has-text-centered">
                  <p className="title is-5 is-size-6-mobile is-uppercase is-bold">
                    age
                    <br/>
                    <span>年齡</span>
                  </p>
                  <p className="is-size-1">29</p>
                </div>
                <div className="is-pos-relative column has-text-centered">
                  <p className="title is-5 is-size-6-mobile is-uppercase is-bold">
                    languages
                    <br/>
                    <span>語言能力</span>
                  </p>
                  <p className="is-size-1">3</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container is-fluid instafeeds is-hidden-mobile">
          <div className="columns is-multiline is-gapless">
            {
              feeds.map((item, i) => {
                return (
                  <img
                    key={`desktop-insta-${item.id}`}
                    className="column is-2"
                    alt={item.caption.text}
                    src={item.images.low_resolution.url}
                  />
                )
              })
            }
          </div>
        </div>

        <div className="container is-fluid instafeeds is-hidden-desktop is-hidden-tablet">
          <div className="columns is-multiline is-gapless is-mobile">
            {
              feeds.map((item, i) => {
                return (
                  <img
                    key={`mobile-insta-${item.id}`}
                    className="column is-2"
                    alt={item.caption.text}
                    src={item.images.low_resolution.url}
                  />
                )
              })
            }
          </div>
        </div>

        <section className="hero is-large contact">
          <div className="hero-body">
            <p className="has-text-centered">
              <a
                onClick={() => this.context.router.push('/contact')}
                className="is-uppercase is-size-3 is-size-4-mobile"
              >
                contact me
              </a>
            </p>
          </div>
        </section>

        <Footer router={this.context.router} />

        <Loading show={loading} />

      </div>
    )
  }

}

About.propTypes = {}
About.contextTypes = {
  router: PropTypes.object,
}

export default About
