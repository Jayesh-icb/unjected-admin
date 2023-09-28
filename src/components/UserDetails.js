import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function UserDetails() {
  const { id } = useParams()
  //   const [user, setUser] = useState(null)

  const initialData = {
    "LOGIN SUCCESS FOR ADMIN": [
      {
        id: 3,
        time_created: "1969-12-31T18:30:01.000Z",
        time_updated: "1969-12-31T18:30:05.000Z",
        cognito_user_id: "test",
        first_name: "adnan",
        last_name: "farooq",
        email: "testadnan@gmail.com",
        birthday: null,
        gender: null,
        address: null,
        about_me: null,
        username: "adnanfarooq",
        looking_for_id: null,
        profession_id: null,
        marital_status_id: null,
        children: null,
        starsign_id: null,
        instagram: null,
        twitter: null,
        website: null,
        deactivated: false,
        deleted_at: null,
        legacy_user_id: null,
      },
    ],
  }

  const [user, setUser] = useState(initialData["LOGIN SUCCESS FOR ADMIN"][0])

  if (!user) return <div>Loading...</div>

  return (
    <div className="bg-gray-200 min-h-screen p-10">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8 space-y-4">
        <h1 className="text-2xl font-bold text-gray-700">
          {user.first_name} {user.last_name}
        </h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="text"
              value={user.first_name}
              onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="text"
              value={user.last_name}
              onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Birthday
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="date"
              value={user.birthday || ""}
              onChange={(e) => setUser({ ...user, birthday: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Gender
            </label>
            <select
              className="mt-1 p-2 w-full border rounded-md"
              value={user.gender || ""}
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Address
            </label>
            <textarea
              className="mt-1 p-2 w-full border rounded-md"
              rows="3"
              value={user.address || ""}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              About Me
            </label>
            <textarea
              className="mt-1 p-2 w-full border rounded-md"
              rows="5"
              value={user.about_me || ""}
              onChange={(e) => setUser({ ...user, about_me: e.target.value })}
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          {/* Here, I'm skipping fields like "looking_for_id", "profession_id", etc. as they seem to need specific selectors or further information. */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Instagram
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="url"
              value={user.instagram || ""}
              placeholder="https://instagram.com/username"
              onChange={(e) => setUser({ ...user, instagram: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Twitter
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="url"
              value={user.twitter || ""}
              placeholder="https://twitter.com/username"
              onChange={(e) => setUser({ ...user, twitter: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Website
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="url"
              value={user.website || ""}
              placeholder="https://example.com"
              onChange={(e) => setUser({ ...user, website: e.target.value })}
            />
          </div>
        </div>

        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
