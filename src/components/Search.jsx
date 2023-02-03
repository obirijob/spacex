/** @format */

import React, { useState } from 'react'

function Search({ updateSearch }) {
  const [search, setSearch] = useState({})

  function handleSearch(e) {
    const { value, name } = e.target
    setSearch(s => ({
      ...s,
      [name]: name === 'original_launch' ? `${value}:00.000Z` : value,
    }))
  }

  return (
    <div className="search">
      <div className="title">Search Form</div>
      <form
        className="search-form"
        onSubmit={e => {
          e.preventDefault()
          updateSearch(search)
        }}
      >
        <div className="form-group">
          <label htmlFor="">Status</label>
          <select
            type="text"
            placeholder="Status"
            onChange={handleSearch}
            name="status"
          >
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="retired">Retired</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="">Original Launch</label>
          <input
            type="datetime-local"
            placeholder="Original Launch"
            onChange={handleSearch}
            name="original_launch"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Type</label>
          <input
            type="text"
            placeholder="Type"
            onChange={handleSearch}
            name="type"
          />
        </div>
        <button className="form-group button">Search</button>
      </form>
    </div>
  )
}

export default Search
