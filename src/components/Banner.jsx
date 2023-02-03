/** @format */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faDiscord,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

function Banner({ capsules }) {
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
            <div className="main">{capsules.length}</div>
            <div className="desc">Capsules</div>
          </div>
          <div className="stat">
            <div className="main">
              {capsules.reduce((total, cur) => {
                return total + cur.missions.length
              }, 0)}
            </div>
            <div className="desc">Missions</div>
          </div>
          <div className="stat">
            <div className="main">
              {capsules.reduce((total, cur) => {
                return total + cur.landings
              }, 0)}
            </div>
            <div className="desc">Landings</div>
          </div>
        </div>
      </div>
      <img src={require('../images/rocket_curve.jpg')} alt="" srcset="" />
    </div>
  )
}

export default Banner
