import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ScrollReveal from 'scrollreveal'

import Loading from '@/Loading'
import Footer from '@/common/Footer'
// import Footer from '@/partial/Footer'

class Bonjour extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentWillMount() {
    document.title = 'Bonjour 你好 | Stéphane Nguyen'
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
  }

  render() {

    const { loading } = this.state

    return (
      <div className="article">

        <section className="intro hero is-medium">
          <div className="hero-body">
            <div className="container">
              <h1 className="has-text-centered title is-1 is-size-2-mobile is-uppercase">
                bonjour
              </h1>
              <h4 className="has-text-centered subtitle is-3 is-size-4-mobile">
                你好
              </h4>
            </div>
          </div>

        </section>

        <section className="section content">
          <div className="container">
            <h5 className="title is-5 is-uppercase">introduction</h5>
            <p className="is-paragraph">
              My name is Stéphane Nguyen, I am a french currently living in Taiwan.
              I am 29 years old and work in the web industry for almost 10 years.
              I am going to write as much as I can about my life, my projects.
              The goal is too help you guys all arround the world, in web development, or how to be an expat etc...
            </p>
            <h5 className="title is-5 is-uppercase">hobbies</h5>
            <p className="is-paragraph">
              As a simple person, I want to keep learning and discovering most
              of the things I can. I am passionate with design
              in any kind of domain (cooking, architecture, web of course...).
            </p>
            <h5 className="title is-5 is-uppercase">future</h5>
            <p className="is-paragraph">
              I do not know my future but all decisions I have made or I will make affect or will
              affect it. For now I live in Taiwan but the future can change.
            </p>
          </div>
        </section>

        <Footer router={this.context.router}/>

        <Loading show={loading} />

      </div>
    )
  }

}

Bonjour.propTypes = {}
Bonjour.contextTypes = {
  router: PropTypes.object,
}

export default Bonjour
