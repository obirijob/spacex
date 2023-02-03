/** @format */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import Grid from '../components/Grid'
import Menu from '../components/Menu'
import Search from '../components/Search'
import ModalCapsule from '../components/ModalCapsule'

function LandingPage() {
  const [capsules, setCapsules] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchParams, setSearchParams] = useState({})
  const [modalCapsule, setModalCapsule] = useState(null)
  const [pagination, setPagination] = useState({
    currentPage: 1,
    limit: 7,
  })

  useEffect(() => {
    loadCapsules()
    // eslint-disable-next-line
  }, [searchParams, pagination.currentPage])

  async function loadCapsules() {
    setLoading(true)
    // transform search
    const searchString = Object.keys(searchParams)
      .map(key => key + '=' + searchParams[key])
      .join('&')

    console.log(searchString)

    try {
      const resp = await fetch(
        `https://api.spacexdata.com/v3/capsules?order=asc&offset=${
          (pagination.currentPage - 1) * pagination.limit
        }&limit=${pagination.limit}&${searchString}`
      )
      if (resp.ok) {
        const sules = await resp.json()
        setCapsules(sules)
        setLoading(false)
      } else {
        setLoading(false)
        alert('Failed to load Data')
      }
    } catch (error) {
      setLoading(false)
      alert('Error Loading Data')
    }
    // setLoading(false)
  }

  function nextPage() {
    setPagination(p => ({ ...p, currentPage: p.currentPage + 1 }))
  }

  function prevPage() {
    if (pagination.currentPage > 0) {
      setPagination(p => ({ ...p, currentPage: p.currentPage - 1 }))
    } else {
      alert('This is the first Page')
    }
  }

  function showModal(capsule) {
    setModalCapsule(capsule)
  }

  return (
    <div className="landing">
      <Menu />
      <Banner capsules={capsules} />
      <Search updateSearch={s => setSearchParams(s)} />
      {modalCapsule && (
        <ModalCapsule
          capsule={modalCapsule}
          close={() => setModalCapsule(null)}
        />
      )}
      {loading ? (
        <div className="loading">
          <FontAwesomeIcon icon={faCircleNotch} />
          <span>Loading Capsules</span>
        </div>
      ) : (
        <Grid
          capsules={capsules}
          openCapsuleModal={c => showModal(c)}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </div>
  )
}

export default LandingPage
