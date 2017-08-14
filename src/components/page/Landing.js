import React, { Component } from 'react'
import { Link } from 'react-router'
import Icon from 'react-fa'
import Particles from 'react-particles-js'
import classnames from 'classnames'

class Landing extends Component {

  render() {
    return (
      <div>
        <section className="hero is-fullheight landing-page is-unselectable">

          <div className="particles-container">
            <Particles
              params={
                {
                  particles: {
                    number: {
                      value: 30,
                      density: {
                        enable: true,
                        value_area: 800
                      }
                    },
                    shape: {
                      type: 'circle',
                      stroke: {
                        width: 1,
                        color: '#e3008c'
                      },
                    },
                    line_linked: {
                      enable: true,
                      distance: 210,
                      color: '#e3008c',
                      opacity: 0.2,
                      width: 1
                    }
                  }
                }
              }
              />
          </div>

          <div className="hero-head">

            <div className="columns">

              <div className="column">
                <div className="columns">
                  <div className="column is-one-quarter">
                    <p className="is-uppercase is-bold is-size-7">
                      {'from paris'}
                      <br/>
                      {'living in taiwan'}
                      <br/>
                      {'huuduc.github.io'}
                      <br/>
                      {'®huuduc.'}
                    </p>
                  </div>
                  <div className="column is-one-quarter">
                    <p className="is-uppercase is-bold is-size-7">
                      {'front end + full stack php developer /'}
                      <br/>
                      {'amateur photographer /'}
                      <br/>
                      {'I '}
                      <span className="is-active">{String.fromCharCode(9829)}</span>
                      {' design.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="column socials has-text-right">
                {/*
                  <p className="is-bold">
                    <span className="is-active">EN</span>
                    <span>{' / '}</span>
                    <span>中文</span>
                  </p>
                */}
                <div>
                  <a href="http://codepen.io/huuduc/" className=" is-size-5 is-bold">
                    <Icon name="codepen" />
                  </a>
                  <a href="https://twitter.com/huuducweb" className=" is-size-5 is-bold">
                    <Icon name="linkedin" />
                  </a>
                  <a href="https://tw.linkedin.com/in/stephanehuuducnguyen" className=" is-size-5 is-bold">
                    <Icon name="twitter" />
                  </a>
                  <a href="https://github.com/HuuDuc" className=" is-size-5 is-bold">
                    <Icon name="github" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-1 is-uppercase">
                Stephane Nguyen
              </h1>
              <h6 className="is-uppercase title is-6">you live once so enjoy and<br/> keep learning</h6>
            </div>
          </div>

          <div className="hero-foot">
            <div className="columns">
              <div className="column is-uppercase has-text-centered">
                <Link
                  to="/about"
                  className="is-bold is-size-7"
                  classNames={
                    classnames({
                      'is-bold': true,
                      'is-size-7': true,
                      // 'is-active': this.props.route.pathnames === 'about' || false
                    })
                  }
                >
                  about
                </Link>
              </div>
              <div className="column is-uppercase has-text-centered">
                <Link to="/projects" className="is-bold is-size-7">projects</Link>
              </div>
              <div className="column is-uppercase has-text-centered">
                <Link to="/blog" className="is-bold is-size-7">blog</Link>
              </div>
              <div className="column is-uppercase has-text-centered">
                <Link
                  to="/contact"
                  className={
                    classnames({
                      'is-bold': true,
                      'is-size-7': true,
                    })
                  }
                >
                  contact
                </Link>
              </div>
            </div>

          </div>

        </section>
        {this.props.children}
      </div>
    )
  }

}

Landing.propTypes = {}
Landing.contextTypes = {}

export default Landing
