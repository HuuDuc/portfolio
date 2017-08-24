import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              I develop and design my portfolio with
            </p>
            <p>
              <a className="icon" href="https://github.com/jgthms/bulma">
                <i className="fa fa-heart"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
