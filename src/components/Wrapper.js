import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Logo from '@/common/Logo'
import MenuIcon from '@/common/MenuIcon'
import Menu from '@/common/Menu'

class Wrapper extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show_menu: false
    }
  }

  onToggleMenu = () => {
    console.log('show_menu', !this.state.show_menu)
    this.setState({
      show_menu: !this.state.show_menu
    })
  }

  render() {
    const { show_menu } = this.state
    return (
      <div>
        <Menu show={show_menu} />
        <MenuIcon onClick={this.onToggleMenu}  />
        <Logo show={show_menu} />
        {this.props.children}
      </div>
    )
  }

}

Wrapper.propTypes = {
}

export default Wrapper
