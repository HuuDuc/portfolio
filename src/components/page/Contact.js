import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ScrollReveal from 'scrollreveal'
import QueryString from 'query-string'
import Icon from 'react-fa'

import Loading from '@/Loading'

class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentWillMount() {
    document.title = 'CONTACT 聯絡 | Stéphane Nguyen'
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
      <div className="contact-page">
        <section
          className="intro hero is-fullheight is-unselectable"
        >

          <iframe
            title="taipei"
            src="https://snazzymaps.com/embed/13370"
          />

          <div className="hero-body">
            <div className="container">
              <h1 className="has-text-centered title is-1 is-size-2-mobile is-uppercase">
                contact
              </h1>
              <h4 className="has-text-centered subtitle is-3 is-size-4-mobile">
                聯絡
              </h4>
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <p className="is-paragraph has-text-centered">
                    {'You would like to contact me ? Feel free to send me an email.'}
                    <br/>{'Currently opening for new opportunities'}
                    <br/><br/>
                    <a className="is-size-5 is-size-5-mobile is-uppercase" onClick={this.mailTo}>email me</a>
                  </p>
                  <p className="link-socials has-text-centered is-hidden-tablet is-hidden-desktop">
                    <a className="is-size-5 is-size-5-mobile" href="https://twitter.com/huuducweb"><Icon name="twitter"/></a>
                    <a className="is-size-5 is-size-5-mobile" href="http://www.linkedin.com/in/stephanehuuducnguyen"><Icon name="linkedin"/></a>
                    <a className="is-size-5 is-size-5-mobile" href="https://github.com/HuuDuc"><Icon name="github"/></a>
                  </p>
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

Contact.propTypes = {}
Contact.contextTypes = {
  router: PropTypes.object,
}

export default Contact
