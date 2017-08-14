import React, { Component } from 'react'

import Landing from './Landing'

class About extends Component {

  render() {

    console.log('this.props.', this.props);

    return (
      <Landing>
        <div>About</div>
      </Landing>
    )
  }

}

About.propTypes = {}
About.contextTypes = {}

export default About
