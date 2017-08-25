import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ScrollReveal from 'scrollreveal'
// import Icon from 'react-fa'
// import classnames from 'classnames'

// import Nav from './partial/Nav'

// import Particles from 'react-particles-js'

import Loading from '@/Loading'
import ScrollIcon from '@/common/ScrollIcon'
import Footer from '@/partial/Footer'

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

  componentWillMount() {
    document.title = 'About | Stéphane Nguyen'
  }

  componentDidMount() {
    this.setState({ loading: false })
    this.animation()
  }

  animation = () => {
    const sr = ScrollReveal()
    sr
      .reveal('.intro h2', { origin: 'top', delay: 800, scale: 1 }, 500)
      .reveal('.intro h4', { origin: 'left', delay: 800, scale: 1 }, 500)
      .reveal('.intro .columns', { origin: 'right', delay: 800, scale: 1 }, 500)
      //.reveal('.biographies section', { delay: 800, scale: 1 }, 500)
      .reveal('.taipei .img', { origin: 'left', delay: 500, scale: 1 }, 500)
      .reveal('.taipei .description', { origin: 'right', delay: 500, scale: 1 }, 500)
      .reveal('.hero.numbers h3', { origin: 'left', delay: 500, scale: 1 }, 100)
      .reveal('.hero.numbers p.has-text-centered', { origin: 'right', delay: 500, scale: 1 }, 100)
      .reveal('.hero.numbers .columns .column', { delay: 500, scale: 1 }, 100)
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

    // const { router } = this.context
    // const {
    //   biographies,
    //   experiences,
    //   numbers,
    //   selected_number,
    //   loading,
    //   description_number_show
    // } = this.state

    const { loading } = this.state

    return (
      <div className="about-page">

        <section className="intro hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h2 className="has-text-centered title is-2 is-uppercase">
                about
              </h2>
              <h4 className="has-text-centered subtitle is-4">
                關於我
              </h4>
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <p className="is-paragraph has-text-centered">
                    {'Who am I ? I am Stéphane Nguyen, a french front-end developer with over 9 years experiences in the web industry.'}
                  </p>
                </div>
              </div>
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

        <section className="numbers hero">
          <div className="hero-body">
            <div className="container">
              <h3 className="title is-3 is-uppercase has-text-centered">few numbers</h3>
              <p
                className="has-text-centered is-paragraph"
                dangerouslySetInnerHTML={{ __html: 'Most of the time, numbers are more accurate and efficient to know something or someone.' }}
              />
            <div className="columns">
                <div className="is-pos-relative column has-text-centered">
                  <p className="title is-5 is-uppercase is-bold">age</p>
                  <p className="subtitle is-6">年齡</p>
                  <p className="is-size-1">29</p>
                </div>
                <div className="is-pos-relative column has-text-centered">
                  <p className="title is-5 is-uppercase is-bold">experiences</p>
                  <p className="subtitle is-6">經驗</p>
                  <p className="is-size-1">10</p>
                </div>
                <div className="is-pos-relative column has-text-centered">
                  <p className="title is-5 is-uppercase is-bold">countries lived</p>
                  <p className="subtitle is-6">國家居住</p>
                  <p className="is-size-1">2</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hero is-light">

          <div className="hero-body">
            <div className="container taipei">
              <div className="img" />
              <section className="description section">
                <h4 className="has-text-centered title is-4 is-uppercase">taiwan</h4>
                <h5 className="has-text-centered title is-5 is-normal">台灣</h5>
                <div className="has-text-centered has-text-centered has-text-left-mobile">
                  <p
                    className="is-paragraph"
                    dangerouslySetInnerHTML={{ __html: 'Since July 2014, I left France to move to Taiwan. Taiwan is becoming my home. <br/> So far, I love this place and would like to stay all life.' }}
                  />
                </div>
              </section>
            </div>
          </div>

        </section>

        <section className="hero is-fullheight is-primary">
          <div className="hero-body">
            <div className="container">
              test
            </div>
          </div>
        </section>

        {/*
          <section className="hero is-light">
            <div className="container">
              <div className="columns biographies">
                {
                  biographies.map((biography, i) => {
                    return (
                      <div
                        key={`biography${i}`}
                        className="column"
                      >
                        <section className="section">
                          <h5 className="title is-5 is-bold is-uppercase">{biography.section}</h5>
                          <h6 className="title is-6 is-normal">{biography.section_zh}</h6>
                          <div className="content">
                            <p className="is-paragraph" dangerouslySetInnerHTML={{ __html: biography.description }} />
                          </div>
                        </section>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </section>
        */}

        <Footer />

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
