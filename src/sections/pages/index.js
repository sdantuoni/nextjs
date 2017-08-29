import Link from 'next/link';
import React from 'react';
import Tween from 'gsap';
var Styles = 'style.css';

class Landing extends React.Component {

  render() {
      console.log(this.__proto__.constructor.name);

    return (

      <div>
        <h1>This is a page one</h1>
      </div>
    );
  }
};


export default Landing;
