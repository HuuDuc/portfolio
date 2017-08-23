import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-fa'
import Particles from 'react-particles-js'
import classnames from 'classnames'

class Landing extends Component {

  render() {

    const { router } = this.context

    return (
      <div className="landing">

        <section className="first hero is-fullheight">

          <div className="particles-content">
            <Particles
              params={
                {
                  particles: {
                    number: {
                      value: 25,
                      density: {
                        enable: true,
                        value_area: 500
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
                      distance: 500,
                      color: '#e3008c',
                      opacity: 0.8,
                      width: 1
                    },
                    size: {
                      random: true
                    }
                  }
                }
              }
              />
          </div>`

          <div className="hero-body">
            <div className="container is-fluid">
              <div className="columns">
                <div className="column is-hidden-mobile is-1">
                  <img src={require('+/frontenddeveloper.png')}/>
                </div>
                <div className="column middle-content">

                    <div>
                      <p className="is-uppercase is-size-1 is-size-3-mobile is-underline">您好</p>
                      <p className="is-uppercase is-size-1 is-size-3-mobile is-underline">bonjour</p>
                      <p className="is-uppercase is-size-1 is-size-3-mobile is-underline">hello</p>
                    </div>

                </div>
                <div className="social column is-hidden-mobile is-1 has-text-right">

                  <p><a href="https://twitter.com/huuducweb"><Icon name="twitter"/></a></p>
                  <p><a href="https://twitter.com/huuducweb"><Icon name="linkedin"/></a></p>
                  <p><a href="https://twitter.com/huuducweb"><Icon name="github"/></a></p>

                </div>
              </div>
            </div>
          </div>

        </section>
        <section className="hero is-fullheight is-primary">

          <div className="hero-body">landing page</div>

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
