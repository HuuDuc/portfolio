

import React, { Component } from 'react'
import Icon from 'react-fa'
import QueryString from 'query-string'

class Footer extends Component {

  mailTo = () => {
    const params = {
      subject: 'Hello from my website',
      body: 'Your message here'
    }
    document.location.href = `mailto:s.nguyen@outlook.com?${QueryString.stringify(params)}`
  }

  render() {

    return (
      <section className="hero is-dark footer">

        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-8">
                <h5 className="title is-5 is-uppercase">what is it</h5>
                <p className="is-paragraph">
                  {'Welcome to my portfolio. Enjoy and take your time.'}<br/>
                  {'© 2017 Stephane Nguyen. Built with ReactJS and Bulma.io'}
                </p>
              </div>
              <div className="column is-2 has-text-right menu">
                <h5 className="title is-5 is-uppercase">menu</h5>
                <p className="is-paragraph is-uppercase">
                  <a onClick={()=> this.props.router.push('/')}>home</a>
                </p>
                <p className="is-paragraph is-uppercase">
                  <a onClick={()=> this.props.router.push('/about')}>about</a>
                </p>
                <p className="is-paragraph is-uppercase">
                  <a onClick={()=> this.props.router.push('/blog')}>blog</a>
                </p>
                <p className="is-paragraph is-uppercase">
                  <a onClick={()=> this.props.router.push('/contact')}>contact</a>
                </p>
              </div>
              <div className="column is-2 has-text-right">
                <h5 className="title is-5 is-uppercase">follow me</h5>
                <p className="is-paragraph social-content">
                  <a className="is-size-5 is-size-5-mobile" href="https://twitter.com/huuducweb"><Icon name="twitter"/></a>
                  <a className="is-size-5 is-size-5-mobile" href="http://www.linkedin.com/in/stephanehuuducnguyen"><Icon name="linkedin"/></a>
                  <a className="is-size-5 is-size-5-mobile" href="https://github.com/HuuDuc"><Icon name="github"/></a>
                  <a className="is-size-5 is-size-5-mobile" onClick={this.mailTo}><Icon name="paper-plane"/></a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    )
  }

}

export default Footer
