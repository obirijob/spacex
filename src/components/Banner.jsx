/** @format */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faDiscord,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

function Banner() {
  return (
    <div className="banner">
      <div className="text">
        <div className="leading">
          Let's go beyond <br /> our{' '}
          <span className="highlight">imagination</span>
        </div>
        <div className="trailing">
          This is where we create everything. <br />
          Remove anything that stops you.
        </div>
        <div className="actions">
          <button className="button">Get Started</button>
          <div className="social-links">
            <FontAwesomeIcon icon={faDiscord} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <div className="main">+32k</div>
            <div className="desc">Users</div>
          </div>
          <div className="stat">
            <div className="main">+8k</div>
            <div className="desc">Ideas</div>
          </div>
          <div className="stat">
            <div className="main">+2k</div>
            <div className="desc">Customers</div>
          </div>
        </div>
      </div>
      <img src={require('../images/rocket_curve.jpg')} alt="" srcset="" />
    </div>
  )
}

export default Banner
