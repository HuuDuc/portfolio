import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Footer from './partial/Footer'
import Particles from 'react-particles-js'

class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selected_number: 'age',
      experiences: [
        {
          company: 'nogle',
          period: 'Sep 2016 - Now',
          position: 'Senior Front-End developer'
        },
        {
          company: 'asia fusion technology',
          period: 'Mar 2015 - Sep 2016',
          position: 'Senior Front-End developer'
        },
        {
          company: 'Webnet',
          period: 'Jun 2013 - Jul 2014',
          position: 'PHP Full Stack engineer'
        },
        {
          company: 'Webnet',
          period: 'Jun 2013 - Jul 2014',
          position: 'PHP Full Stack engineer'
        },
        {
          company: 'pyramid consulting',
          period: 'Mar 2013 - Jun 2013',
          position: 'Senior PHP developer'
        },
        {
          company: 'Vivaki',
          period: 'Dec 2012 - Fev 2013',
          position: 'Freelance PHP Full Stack'
        },
        {
          company: 'Querydyne',
          period: 'Aug 2012 - Nov 2012',
          position: 'Freelance PHP Full Stack'
        },
        {
          company: 'Opteemo',
          period: 'Dec 2010 - Aug 2012',
          position: 'PHP Full Stack developer'
        },
        {
          company: 'Espacemax',
          period: 'Dec 2008 - Nov 2010',
          position: 'PHP Full Stack developer'
        },
      ]
    }
  }

  componentDidMount() {
    document.getElementsByTagName('body')[0].style.overflowY = 'auto'
  }

  componentWillUnmount() {
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
  }

  onChangeNumber = (selected_number) => {
    this.setState({ selected_number })
  }

  render() {

    const { router } = this.context
    const { selected_number, experiences } = this.state

    return (
      <div id="about">

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
                      value: 40,
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
                      color: '#ffffff',
                      opacity: 0.6,
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
            back
          </div>

          <div className="hero-body">
            <h2 className="title is-2 is-normal has-text-centered">
              Because I hate confort zone, <br/>
              I am always curious to know more and <br/>get new challenges.
              <br/>
              <span className="is-size-5">
                scroll<br/>
                {String.fromCharCode(9662)}
              </span>
            </h2>
          </div>

          <Footer
            router={router}
            pathname={this.props.route.pathnames}
          />

        </section>
        <section>

          <div className="container">

            <div className="biography">
              <div className="columns">
                <div className="column is-2 is-offset-2">
                  <p className="is-bold is-uppercase">in brief</p>
                </div>
                <div className="column is-6">
                  <p className="text">
                    I am friendly, funny, sometime
                    stupid and childish but this is how I want to live. I don't want a boring life.<br/>
                    I decided to work in a web industries to combine my interest about design and programmation.<br/>
                    So far I already got bunch of experiences (E-Commerce, web agencies, freelance, IT companies, Gambling).
                  </p>
                </div>
              </div>
              <div className="columns">
                <div className="column is-2 is-offset-2">
                  <p className="is-bold is-uppercase">now</p>
                </div>
                <div className="column is-6">
                  <p className="text">
                    Living in Taiwan for already 3 years (since July 2014),
                    I am focusing in Front-End development, specially using ReactJS.<br/>
                    But I don't stop myself and keep discovering and testing
                    new technologies, always with design purpose.
                  </p>
                </div>
              </div>
            </div>

            <div className="numbers">
              <div className="columns">
                <div
                  className={classnames({
                    column: true,
                    'has-text-centered': true,
                    'is-active': selected_number === 'age'
                  })}
                  onClick={() => this.onChangeNumber('age')}
                >
                  <p className="is-uppercase is-bold">age</p>
                  <p>29</p>
                </div>
                <div
                  className={classnames({
                    column: true,
                    'has-text-centered': true,
                    'is-active': selected_number === 'experiences'
                  })}
                  onClick={() => this.onChangeNumber('experiences')}
                >
                  <p className="is-uppercase is-bold">experiences (years)</p>
                  <p>10</p>
                </div>
                <div
                  className={classnames({
                    column: true,
                    'has-text-centered': true,
                    'is-active': selected_number === 'lived'
                  })}
                  onClick={() => this.onChangeNumber('lived')}
                >
                  <p className="is-uppercase is-bold">countries lived</p>
                  <p>2</p>
                </div>
                <div
                  className={classnames({
                    column: true,
                    'has-text-centered': true,
                    'is-active': selected_number === 'traveled'
                  })}
                  onClick={() => this.onChangeNumber('traveled')}
                >
                  <p className="is-uppercase is-bold">countries traveled</p>
                  <p>14</p>
                </div>
              </div>
            </div>

          </div>

          <div className="description-nb">
            <div className="container has-text-centered is-size-4 is-uppercase">
              { selected_number === 'age' && <p>I was born on 1988 in France. <br/>Yes I am 30 years old, I am getting old!</p> }
              { selected_number === 'experiences' && <p>I started to work in the web on 2008. <br/> I was only 19 years old.</p> }
              { selected_number === 'lived' && <p>I was borned and raised in France. <br/>Since July 2014, I moved to Taiwan.</p> }
              { selected_number === 'traveled' && <p>I love traveling, specially eat local foods. <br/>It's a good way to go far from the routine.</p> }
            </div>
          </div>

          <div className="experiences">
            <div className="container">
              <div className="columns">
                <div className="column is-2 is-offset-2">
                  <p className="is-bold is-uppercase">experiences</p>
                </div>
                <div className="column is-6 list">

                  {
                    experiences.map((experience, i)=> {
                      return (
                        <div className="columns">
                          {
                            i % 2 !== 0 &&
                            <div className="column" />
                          }
                          <div className="column">
                            <p>{experience.period}</p>
                            <p className="is-bold is-uppercase">{experience.company}</p>
                            <p>{experience.position}</p>
                          </div>
                          {
                            i % 2 === 0 &&
                            <div className="column" />
                          }
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            </div>
          </div>

        </section>

      </div>
    )
  }

}

About.propTypes = {}
About.contextTypes = {
  router: PropTypes.object,
}

export default About
