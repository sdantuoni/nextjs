import Link from 'next/link';
import React from 'react';
import Tween from 'gsap';

class Landing extends React.Component {

  render() {
    const style = {width: this.props.windowWidth, height: this.props.windowHeight};
    return (
      <div>
        <h1>This is a page one</h1>
      </div>
    );
  }
};


export default Landing;
