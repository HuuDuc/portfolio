import React, { Component } from 'react'

import classnames from 'classnames'

class MenuIcon extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  onOpen = () => {
    const { open } = this.state
    this.setState({ open: !open })
    this.props.onClick(!open);
  }

  render() {
    const { open } = this.state;
    return (
      <div
        onClick={this.onOpen}
        className={classnames({
          'menu-icon': true,
          open
        })}
      >
        <div/>
      </div>
    );
  }

}

export default MenuIcon
