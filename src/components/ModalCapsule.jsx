/** @format */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function ModalCapsule({ capsule, close }) {
  const {
    capsule_serial,
    capsule_id,
    status,
    original_launch,
    missions,
    landings,
    type,
    details,
    reuse_count,
  } = capsule
  return (
    <div className="modal">
      <FontAwesomeIcon icon={faRocket} />
      <button onClick={close}>Close Modal</button>
    </div>
  )
}

export default ModalCapsule
