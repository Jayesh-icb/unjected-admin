import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function UserDetail() {
  const { email } = useParams()
  const [user, setUser] = useState(null)

  function saveChanges() {
    axios
      .patch(`https://unjected.onrender.com/admin/user/edit/${email}`, user)
      .then((response) => {
        // Handling success
        console.log("User updated successfully!", response.data)
        toast.success("User updated successfully!")
        return axios.get(`https://unjected.onrender.com/admin/user/${email}`)
      })
      .catch((error) => {
        // Handle error
        console.error("There was an error updating the user:", error)
        toast.error("There was an error updating the user.")
      })
  }

  // useEffect(() => {
  //   // Fetch user by ID from API
  //   axios
  //     .get(`https://unjected.onrender.com/admin/user/${email}`)
  //     .then((response) => setUser(response.data))
  //     .catch((error) => console.error("Error fetching user:", error))
  // }, [email])

  useEffect(() => {
    // Fetch user by ID from API
    axios
      .get(`https://unjected.onrender.com/admin/user/${email}`)
      .then((response) => {
        // Extract user from the response
        const userFromResponse = response.data.User[0]
        setUser(userFromResponse)
      })
      .catch((error) => console.error("Error fetching user:", error))
  }, [email])

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
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={saveChanges}
          >
            Save Changes
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default UserDetail
