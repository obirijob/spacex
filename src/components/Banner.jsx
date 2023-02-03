/** @format */

import React from 'react'

function Banner() {
  return (
    <div className="banner">
      <div className="text">
        <div className="leading">
          Let's go beyond <br /> our{' '}
          <span className="highlight">imagination</span>
        </div>
      </div>
      <img src={require('../images/rocket_dock.jpg')} alt="" srcset="" />
    </div>
  )
}

export default Banner
