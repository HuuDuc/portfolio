import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ScrollReveal from 'scrollreveal'
import ScrollIcon from '@/common/ScrollIcon'
import Icon from 'react-fa'

import Loading from '@/Loading'

class Blog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentWillMount() {
    document.title = 'BLOG 博客 | Stéphane Nguyen'
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

  render() {

    // const { router } = this.context
    const { loading } = this.state

    return (
      <div className="blog-page">
        <section className="intro hero is-large">
          <div className="hero-body">
            <div className="container">
              <h1 className="has-text-centered title is-1 is-size-2-mobile is-uppercase">
                blog
              </h1>
              <h4 className="has-text-centered subtitle is-3 is-size-4-mobile">
                博客
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

        <section className="section">
          <div className="container">
            <div className="columns is-multiline">

              <div className="column is-4">
                <a href="" style={{ display: 'block' }}>
                  <img src="http://fakeimg.pl/300x150/" alt="test" style={{ width: '100%' }}/>
                </a>
                <h4 className="title is-4 is-uppercase">
                  test article title
                </h4>
                <p className="is-paragraph">
                  {'small description of the article. Just to mock and see how it looks like. so let\'s try'}
                </p>
              </div>
              <div className="column is-4">
                <a href="" style={{ display: 'block' }}>
                  <img src="http://fakeimg.pl/300x150/" alt="test" style={{ width: '100%' }}/>
                </a>
                <h4 className="title is-4 is-uppercase">
                  test article title
                </h4>
                <p className="is-paragraph">
                  {'small description of the article. Just to mock and see how it looks like. so let\'s try'}
                </p>
              </div>
              <div className="column is-4">
                <a href="" style={{ display: 'block' }}>
                  <img src="http://fakeimg.pl/300x150/" alt="test" style={{ width: '100%' }}/>
                </a>
                <h4 className="title is-4 is-uppercase">
                  test article title
                </h4>
                <p className="is-paragraph">
                  {'small description of the article. Just to mock and see how it looks like. so let\'s try'}
                </p>
              </div>
              <div className="column is-4">
                <a href="" style={{ display: 'block' }}>
                  <img src="http://fakeimg.pl/300x150/" alt="test" style={{ width: '100%' }}/>
                </a>
                <h4 className="title is-4 is-uppercase">
                  test article title
                </h4>
                <p className="is-paragraph">
                  {'small description of the article. Just to mock and see how it looks like. so let\'s try'}
                </p>
              </div>

            </div>
          </div>
        </section>

        <Loading show={loading} />
      </div>
    )
  }

}

Blog.propTypes = {}
Blog.contextTypes = {
  router: PropTypes.object,
}

export default Blog
