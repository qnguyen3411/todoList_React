import React, { Component } from 'react';
import './style.css';

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        {this.props.children}
      </div>
    )
  }
}
