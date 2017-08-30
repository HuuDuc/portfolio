import React, { Component } from 'react'

import Icon from 'react-fa'

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
        <div className="developer show is-hidden-mobile">
          <p className="is-uppercase is-bold">front-end developer</p>
        </div>
        <div className="socials show has-text-centered is-hidden-mobile">
          <p><a href="https://twitter.com/huuducweb"><Icon name="twitter"/></a></p>
          <p><a href="http://www.linkedin.com/in/stephanehuuducnguyen"><Icon name="linkedin"/></a></p>
          <p><a href="https://github.com/HuuDuc"><Icon name="github"/></a></p>
          <div className="bar">{String.fromCharCode(124)}</div>
          <p><a onClick={this.mailTo}><Icon name="paper-plane"/></a></p>
        </div>
        {this.props.children}
      </div>
    )
  }

}

Wrapper.propTypes = {
}

export default Wrapper
