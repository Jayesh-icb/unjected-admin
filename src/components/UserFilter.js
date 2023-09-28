import React from 'react'

const UserFilter = ({ filter, setFilter }) => {
  return (
    <div className="mb-6">
      <label className="mr-4">Filter:</label>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 rounded bg-white shadow"
      >
        <option value="all">All</option>
        <option value="enabled">Enabled</option>
        <option value="disabled">Disabled</option>
      </select>
    </div>
  )
}

export default UserFilter
