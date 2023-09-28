import React from "react"
import { Link } from "react-router-dom"


const UserCard = ({ user, toggleActivation }) => {
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg bg-white p-6">
        <div className="font-bold text-xl mb-2">
          {user.first_name} {user.last_name}
        </div>
        <p className="text-gray-700 text-base">Email: {user.email}</p>
        <p className="text-gray-700 text-base">Username: {user.username}</p>
        <button
          onClick={() => toggleActivation(user)}
          className={`mt-4 p-2 rounded ${
            user.deactivated ? "bg-red-500" : "bg-green-500"
          } text-white mr-4`}
        >
          {user.deactivated ? "Enable" : "Disable"}
        </button>
        <button className={`mt-4 p-2 rounded bg-blue-500 text-white`}>
          {/* <Link to={`/user/${user.id}`}>View User</Link> */}
          <Link to={`/user/list/${user.email}`}>View User</Link>
        </button>
      </div>
    </>
  )
}

export default UserCard
