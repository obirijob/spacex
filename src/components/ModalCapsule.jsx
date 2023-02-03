/** @format */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import moment from 'moment'

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
      <div className="title">{capsule_serial}</div>
      <p>{details}</p>
      <p>
        <ul>
          <li>
            Capsule Id: <span>{capsule_id}</span>
          </li>
          <li>
            Status: <span>{status}</span>
          </li>
          <li>
            Original Launch:{' '}
            <span>
              {moment(original_launch).format('D dd, MMM YYYY hh:mm:ss a')}
            </span>
          </li>
          <li>
            Landings: <span>{landings}</span>
          </li>
          <li>
            Type: <span>{type}</span>
          </li>
          <li>
            Reuse Count: <span>{reuse_count}</span>
          </li>
        </ul>
      </p>
      {missions.length > 0 ? (
        <>
          <div className="title">
            Missions <span className="badge">{missions.length}</span>{' '}
          </div>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Flight</th>
              </tr>
            </thead>
            <tbody>
              {missions.map(({ name, flight }) => (
                <tr>
                  <td>{name}</td>
                  <td>{flight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className="no-mission" style={{ margin: 10 }}>
          No Missions
        </div>
      )}
      <button onClick={close}>Close Modal</button>
    </div>
  )
}

export default ModalCapsule
