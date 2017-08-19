import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-fa'
import Particles from 'react-particles-js'
import classnames from 'classnames'

import Footer from './partial/Footer'

class Landing extends Component {

  render() {

    const { router } = this.context

    return (
      <div>

        <section
          className={classnames({
            'hero': true,
            'is-fullheight': true,
            'landing-page': true,
            'is-unselectable': true,
          })}
        >

          <div className="particles-container">
            <Particles
              params={
                {
                  particles: {
                    number: {
                      value: 35,
                      density: {
                        enable: true,
                        value_area: 800
                      }
                    },
                    shape: {
                      type: 'circle',
                      stroke: {
                        width: 0,
                        color: '#ffffff'
                      },
                    },
                    line_linked: {
                      enable: true,
                      distance: 120,
                      color: '#e3008c',
                      opacity: 0.4,
                      width: 1
                    },
                    size: {
                      random: true
                    }
                  }
                }
              }
              />
          </div>

          <div className="hero-head">

            <div className="columns">

              <div className="column is-6">
                <div className="columns">
                  <div className="column is-3">
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
                  <div className="column is-3">
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

            </div>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <h1 className="title is-1 is-uppercase is-normal">
                    Stephane <span className="is-bold">Nguyen</span>
                  </h1>
                  <h6 className="is-uppercase title is-6">you live once so enjoy and<br/> keep learning</h6>
                </div>
              </div>
            </div>
          </div>

          <Footer
            router={router}
            pathname={this.props.route.pathnames}
          />

        </section>

      </div>
    )
  }

}

Landing.propTypes = {}
Landing.contextTypes = {
  router: PropTypes.object,
};

export default Landing
