import React, { Component } from 'react';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="background">
        { this.props.children }
      </div>
    )
  }
}

export default Layout;
