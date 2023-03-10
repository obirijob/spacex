/** @format */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Grid({ capsules, openCapsuleModal, nextPage, prevPage }) {
  return (
    <>
      <div className="grid">
        {capsules.map(capsule => (
          <div className="capsule" onClick={() => openCapsuleModal(capsule)}>
            <FontAwesomeIcon icon={faRocket} size="2x" />
            <span>
              {capsule.capsule_serial} - {capsule.type}
            </span>
          </div>
        ))}
      </div>
      <div className="pager">
        <button onClick={prevPage} className="prev">
          Previous Page
        </button>
        <button onClick={nextPage} className="nextPage">
          Next Page
        </button>
      </div>
    </>
  )
}

export default Grid
