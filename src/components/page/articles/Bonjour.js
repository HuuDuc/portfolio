import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ScrollReveal from 'scrollreveal'

import Loading from '@/Loading'
import ScrollIcon from '@/common/ScrollIcon'
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
      .reveal('.intro .columns', { origin: 'right', delay: 800, scale: 1 }, 500)
  }

  onChangeNumber = (selected_number) => {

    if (selected_number === this.state.selected_number) return

    this.setState({
      description_number_show: false
    })

    setTimeout(()=> {
      this.setState({
        selected_number,
        description_number_show: true
      })
    }, 400)
  }

  renderDescriptionNumber = () => {
    const { selected_number, numbers } = this.state
    return numbers
      .find(number => selected_number === number.key)
      .description
  }

  render() {

    const { loading } = this.state

    return (
      <div className="about-page">

        <section className="intro hero is-fullheight">
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

          <div className="hero-foot">
            <div
              className="container is-pos-relative"
              style={{ height: '50px', marginBottom: '40px' }}
            >
              <ScrollIcon />
            </div>
          </div>

        </section>

        <section className="section article">
          <div className="container">
            <h5 className="title is-5 is-uppercase">introduction</h5>
            <p className="is-paragraph">
              My name is Stéphane Nguyen, I am a french currently living in Taiwan.
              I am 29 years old and work in the web industry for almost 10 years.
              I am going to write as much as I can about my life, my projects.
              The goal is too help you guys all arround the world.
              Hope you will come here often.
            </p>
            <h5 className="title is-5 is-uppercase">hobbies</h5>
            <p className="is-paragraph">
              I am a simple person like to keep learning and discovering most
              of the things I can. I like to cook, I am passtionate with design
              in any kind of domain. I like traveling.
            </p>
            <h5 className="title is-5 is-uppercase">future</h5>
            <p className="is-paragraph">
              I do not know my future but all decision I made or I will make will
              affect it. For now I am in Taiwan but the future can change then
              I will keep following it.
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
