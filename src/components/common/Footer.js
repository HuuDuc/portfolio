

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
          <div className="container">
            <div className="columns is-gapless">
              <div className="column is-8">
                <h5 className="title is-5 is-uppercase">what is it</h5>
                <p className="is-paragraph">
                  {'Welcome to my portfolio. Enjoy and take your time.'}<br/>
                  {'By Stéphane Nguyen. Built with ReactJS and Bulma.io'}
                </p>
                <p className="is-paragraph">
                  {'歡迎來到我的投資組合 享受和花時間。'}<br/>
                  {'作者：StéphaneNguyen 建立與ReactJS和Bulma.io'}
                </p>
              </div>
              <div className="column is-2 has-text-right menu is-hidden-mobile">
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
              <div className="column is-2 has-text-right has-text-left-mobile is-hidden-mobile">
                <h5 className="title is-5 is-uppercase">follow me</h5>
                <p className="is-paragraph social-content">
                  <a className="is-size-6 is-size-5-mobile is-bold" href="https://twitter.com/huuducweb"><Icon name="twitter"/></a>
                  <a className="is-size-6 is-size-5-mobile is-bold" href="http://www.linkedin.com/in/stephanehuuducnguyen"><Icon name="linkedin"/></a>
                  <a className="is-size-6 is-size-5-mobile is-bold" href="https://github.com/HuuDuc"><Icon name="github"/></a>
                  <a className="is-size-6 is-size-5-mobile is-bold" onClick={this.mailTo}><Icon name="paper-plane"/></a>
                </p>
              </div>
            </div>
          </div>

      </section>
    )
  }

}

export default Footer
