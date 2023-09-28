import React from "react"

const UserCardThree = ({ user, deleteUser }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white p-6">
      <div className="font-bold text-xl mb-2">
        {user.first_name} {user.last_name}
      </div>
      <p className="text-gray-700 text-base">Email: {user.email}</p>
      <p className="text-gray-700 text-base">Username: {user.username}</p>
      <button
        // onClick={() => deleteUser(user.id)}
        className="mt-4 p-2 rounded bg-red-500 text-white"
      >
        Revoke
      </button>
    </div>
  )
}

export default UserCardThree
