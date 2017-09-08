import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ScrollReveal from 'scrollreveal'

import Loading from '@/Loading'
import Footer from '@/common/Footer'
import ScrollIcon from '@/common/ScrollIcon'

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
        <section className="intro hero is-fullheight">
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
            <div className="columns is-multiline list-articles">

              <div className="column is-4">
                <a
                  className="image"
                  onClick={() => this.context.router.push('/article/bonjour')}
                >
                  <img
                    src={require('+/articles/bonjour.jpg')}
                    alt="bonjour"
                    style={{ width: '100%' }}
                  />
                </a>
                <h5 className="title is-5 is-uppercase">
                  bonjour <span>你好</span>
                </h5>
                <p className="is-paragraph">Introduction about myself, my hobbies, my future and philosophy.</p>
                <p className="has-text-right">
                  <a
                    className="is-uppercase"
                    onClick={() => this.context.router.push('/article/bonjour')}
                  >
                    read more
                  </a>
                </p>
              </div>

            </div>
          </div>
        </section>

        <Footer router={this.context.router} />

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
