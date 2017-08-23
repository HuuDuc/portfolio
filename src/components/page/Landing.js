import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-fa'
import Particles from 'react-particles-js'
import classnames from 'classnames'
import store from 'store'

import Nav from './partial/Nav'
import MenuIcon from '@/common/MenuIcon'

class Landing extends Component {

  componentWillMount() {
    if (!store.get('locale')) {
      store.set('locale', 'EN')
    }
  }

  render() {

    const { router } = this.context

    return (
      <div>

        <MenuIcon onClick={()=> console.log('menu')}/>

      </div>
    )
  }

}

Landing.propTypes = {}
Landing.contextTypes = {
  router: PropTypes.object,
};

export default Landing
