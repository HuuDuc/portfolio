import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-fa'
import classnames from 'classnames'

import Nav from './partial/Nav'
import Loading from '../Loading'
import Particles from 'react-particles-js'

class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      description_number_show: true,
      selected_number: 'age',
      biographies: [
        {
          section: 'briefly',
          section_zh: '簡要地',
          description: 'I am friendly, funny, sometime stupid and childish but this is how I want to live. I don\'t want a boring life.<br/> I decided to work in a web industries to combine my interest about design and programmation.<br/> So far I already got bunch of experiences (E-Commerce, web agencies, freelance, IT companies, Gambling).',
          description_zh: '我很友善，有趣，有時候愚蠢和幼稚，但這是我想要的生活。 我不想要一個無聊的生活。<br/>我決定在網絡行業工作，結合我對設計和程序設計的興趣。<br/>到目前為止，我已經有了一大堆經驗（電子商務，網絡機構，自由職業者，IT公司，賭博）。'
        },
        {
          section: 'now',
          section_zh: '現在',
          description: ' Living in Taiwan for already 3 years (since July 2014), I am focusing in Front-End development, specially using ReactJS.<br/> But I don\'t stop myself and keep discovering and testing new technologies, always with design purpose.',
          description_zh: '在台灣生活了3年（自2014年7月起），我專注於前端開發，特別是使用ReactJS。<br/>但是，我不會停止自己，不斷發現和測試新技術，始終以設計為目的。'
        },
      ],
      numbers: [
        {
          key: 'age',
          label: 'age',
          label_zh: '年齡',
          digit: 29,
          description: 'I was born on 1988 in France. <br/>Yes I am 30 years old, I am getting old!'
        },
        {
          key: 'experiences',
          label: 'experiences (year)',
          label_zh: '經驗（年）',
          digit: 10,
          description: 'I started to work in the web on 2008. <br/> I was only 19 years old.'
        },
        {
          key: 'lived',
          label: 'countries lived',
          label_zh: '住過的國家',
          digit: 2,
          description: 'I was borned and raised in France. <br/>Since July 2014, I moved to Taiwan.'
        },
        {
          key: 'traveled',
          label: 'countries traveled',
          label_zh: '去過的國家',
          digit: 14,
          description: 'I love traveling, specially eat local foods. <br/>It\'s a good way to go far from the routine.'
        },
      ],
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

    this.setState({ loading: false })
  }

  componentWillUnmount() {
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
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

    const { router } = this.context
    const {
      biographies,
      experiences,
      numbers,
      selected_number,
      loading,
      description_number_show
    } = this.state

    return (
      <div id="about">

        <section
          className={classnames({
            'hero': true,
            'is-fullheight': true,
            'is-unselectable': true,
          })}
        >

          <div className="particles-container">
            <Particles
              params={
                {
                  particles: {
                    number: {
                      value: 50,
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
          </div>

          <div className="hero-head">
            <span
              onClick={() => this.context.router.push('/')}
              className="is-uppercase is-lighter"
            >
              {String.fromCharCode(8592)} home
            </span>
          </div>

          <div className="hero-body">
            <h1 className="is-title-section">
              about me
              <span>關於我</span>
            </h1>
          </div>

          <div className="hero-foot has-text-centered">
            <span
              className="is-uppercase is-bold"
            >
              {String.fromCharCode(8595)}
            </span>
          </div>

        </section>
        <section>

          <div className="container">

            <div className="biography">

              {
                biographies.map((biography, i) => {
                  return ([
                    <div
                      className="columns"
                      key={`biography-${i}`}
                    >
                      <div className="column is-3">
                        <p className="is-bold is-uppercase is-size-3">
                          {biography.section}<br/>
                          <span className="is-size-5 is-normal">{biography.section_zh}</span>
                        </p>
                      </div>
                      <div className="column is-7">
                        <p
                          className="text"
                          dangerouslySetInnerHTML={{ __html: biography.description }}
                        />
                        <p
                          className="text zh"
                          dangerouslySetInnerHTML={{ __html: biography.description_zh }}
                        />
                      </div>
                    </div>,
                    <div className="separation" />
                  ])
                })
              }

            </div>

            <div className="numbers">
              <div className="columns">

                {
                  numbers.map((nb) => {
                    return(
                      <div
                        key={`number-${nb.key}`}
                        className={classnames({
                          column: true,
                          'has-text-centered': true,
                          'is-active': selected_number === nb.key
                        })}
                        onClick={() => this.onChangeNumber(nb.key)}
                      >
                        <p className="is-uppercase is-bold">
                          {nb.label}
                        </p>
                        <p>{nb.digit}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>

          </div>

          <div className="description-nb">
            <div className="container has-text-centered is-size-4 is-uppercase">
              <p
                className={classnames({ show: description_number_show })}
                dangerouslySetInnerHTML={{ __html: this.renderDescriptionNumber() }}
              />
            </div>
          </div>

          <div className="experiences">
            <div className="container is-fluid">
              <div className="columns">
                <div className="column is-2">
                  <p className="is-bold is-uppercase is-size-3">
                    experiences<br/>
                    <span className="is-size-5 is-normal">經驗</span>
                  </p>
                </div>
                <div className="column is-7 list">

                  {
                    experiences.map((experience, i)=> {
                      return (
                        <div
                          key={`experience-${i}`}
                          className="columns"
                        >
                          {
                            i % 2 !== 0 &&
                            <div className="column" />
                          }
                          <div className="column">
                            <p className="is-size-6">{experience.period}</p>
                            <p className="is-size-4 is-bold is-uppercase">{experience.company}</p>
                            <p className="is-size-5 is-lighter">{experience.position}</p>
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
