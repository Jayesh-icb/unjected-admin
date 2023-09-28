import React, { useState, useEffect } from "react"
import axios from "axios"
import UserFilter from "./UserFilter"
import UserCard from "./UserCard"
import { FaSearch, FaEnvelope, FaRegBell } from "react-icons/fa"

// const initialData = {
//   'LOGIN SUCCESS FOR ADMIN': [
//     {
//       id: 3,
//       time_created: '1969-12-31T18:30:01.000Z',
//       time_updated: '1969-12-31T18:30:05.000Z',
//       cognito_user_id: 'test',
//       first_name: 'adnan',
//       last_name: 'farooq',
//       email: 'testadnan@gmail.com',
//       birthday: null,
//       gender: null,
//       address: null,
//       about_me: null,
//       username: 'adnanfarooq',
//       looking_for_id: null,
//       profession_id: null,
//       marital_status_id: null,
//       children: null,
//       starsign_id: null,
//       instagram: null,
//       twitter: null,
//       website: null,
//       deactivated: false,
//       deleted_at: null,
//       legacy_user_id: null,
//     },
//     {
//       id: 4,
//       time_created: '2023-08-17T13:43:02.925Z',
//       time_updated: '2023-08-17T13:43:02.925Z',
//       cognito_user_id: 'test1@gmail.com',
//       first_name: 'adnan',
//       last_name: 'farooq',
//       email: 'test1@gmail.com',
//       birthday: null,
//       gender: null,
//       address: null,
//       about_me: null,
//       username: 'adnan farooq',
//       looking_for_id: null,
//       profession_id: null,
//       marital_status_id: null,
//       children: null,
//       starsign_id: null,
//       instagram: null,
//       twitter: null,
//       website: null,
//       deactivated: false,
//       deleted_at: null,
//       legacy_user_id: null,
//     },
//     {
//       id: 6,
//       time_created: '2023-08-17T20:22:59.410Z',
//       time_updated: '2023-08-17T20:22:59.410Z',
//       cognito_user_id: 'nanan',
//       first_name: 'pryianka ',
//       last_name: 'abc',
//       email: 'abc@gmail.com',
//       birthday: null,
//       gender: null,
//       address: null,
//       about_me: null,
//       username: 'abab nnana',
//       looking_for_id: null,
//       profession_id: null,
//       marital_status_id: null,
//       children: null,
//       starsign_id: null,
//       instagram: null,
//       twitter: null,
//       website: null,
//       deactivated: false,
//       deleted_at: null,
//       legacy_user_id: null,
//     },
//     {
//       id: 8,
//       time_created: '2023-08-21T23:28:03.047Z',
//       time_updated: '2023-08-21T23:28:03.047Z',
//       cognito_user_id: 'test01',
//       first_name: 'test1',
//       last_name: 'test1',
//       email: 'test01@gmail.com',
//       birthday: null,
//       gender: null,
//       address: null,
//       about_me: null,
//       username: 'abab nnana',
//       looking_for_id: null,
//       profession_id: null,
//       marital_status_id: null,
//       children: null,
//       starsign_id: null,
//       instagram: null,
//       twitter: null,
//       website: null,
//       deactivated: false,
//       deleted_at: null,
//       legacy_user_id: null,
//     },
//     {
//       id: 5,
//       time_created: '2023-08-17T17:53:17.773Z',
//       time_updated: '2023-08-17T17:53:17.773Z',
//       cognito_user_id: 'azaancognito',
//       first_name: 'azaan',
//       last_name: 'farooq',
//       email: 'azaan@gmail.com',
//       birthday: null,
//       gender: null,
//       address: null,
//       about_me: null,
//       username: 'azaan Farooq',
//       looking_for_id: null,
//       profession_id: null,
//       marital_status_id: null,
//       children: null,
//       starsign_id: null,
//       instagram: null,
//       twitter: null,
//       website: null,
//       deactivated: false,
//       deleted_at: null,
//       legacy_user_id: null,
//     },
//   ],
// }

const AdminDashboard = () => {
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState("all")
  const [searchEmail, setSearchEmail] = useState("")
  const [searchedUser, setSearchedUser] = useState(null)

  useEffect(() => {
    axios
      .get("https://unjected.onrender.com/admin")
      .then((response) => {
        console.log(response.data)
        setUsers(response.data["LOGIN SUCCESS FOR ADMIN"])
      })
      .catch((error) => {
        console.error("There was a problem with the axios operation:", error)
      })
  }, [])

  const filteredUsers = users.filter((user) => {
    if (filter === "enabled") return !user.deactivated
    if (filter === "disabled") return user.deactivated
    return true
  })

  // const toggleUserActivation = (email) => {
  //   const updatedUsers = users.map((user) => {
  //     if (user.email === email) {
  //       console.log(user.deactivated)
  //       return { ...user, deactivated: !user.deactivated }
  //     }
  //     return user
  //   })
  //   setUsers(updatedUsers)
  // }

  // const toggleUserActivation = (email) => {
  //   axios
  //     .post("https://unjected.onrender.com/admin/disable", { email })
  //     .then((response) => {
  //       // Refresh user list after successful toggle
  //       console.log(response.data)
  //       return axios.get("https://unjected.onrender.com/admin")
  //     })
  //     .then((response) => {
  //       console.log(response.data)
  //       setUsers(response.data["LOGIN SUCCESS FOR ADMIN"])
  //     })
  //     .catch((error) => {
  //       console.error("There was a problem with the database operation:", error)
  //     })
  // }

  const toggleUserActivation = (user) => {
    let endpoint
    let data

    if (user.deactivated) {
      endpoint = "https://unjected.onrender.com/admin/enable"
      data = { cognito_user_id: user.cognito_user_id }
    } else {
      endpoint = "https://unjected.onrender.com/admin/disable"
      data = { email: user.email }
    }

    axios
      .post(endpoint, data)
      .then((response) => {
        console.log(response.data)

        // Refresh user list after successful toggle.
        return axios.get("https://unjected.onrender.com/admin")
      })
      .then((response) => {
        console.log(response.data)
        setUsers(response.data["LOGIN SUCCESS FOR ADMIN"])
      })
      .catch((error) => {
        console.error("There was a problem with the database operation:", error)
      })
  }

  // Function to handle the search when the search icon is clicked
  const handleSearch = () => {
    if (searchEmail.trim() === "") {
      // Do not perform the search if the email input is empty
      return
    }

    // Send a GET request to search for the user by email
    axios
      .get(`https://unjected.onrender.com/admin/user/${searchEmail}`)
      .then((response) => {
        // Handle the response from the search
        console.log("User search result:", response.data)

        // Set the searched user in state
        setSearchedUser(response.data.User[0])
      })
      .catch((error) => {
        console.error("There was a problem with the search operation:", error)
        // Handle any errors here
      })
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1> */}

      <UserFilter filter={filter} setFilter={setFilter} />
      <div className="flex items-center rounded-[5px] mb-6">
        <input
          type="text"
          className=" bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal"
          placeholder="Search for..."
          onChange={(e) => setSearchEmail(e.target.value)}
        />
        <div
          className="bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]"
          onClick={handleSearch}
        >
          <FaSearch color="white" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {searchedUser ? ( // Display only if a user has been searched
          <UserCard
            key={searchedUser.id}
            user={searchedUser}
            toggleActivation={toggleUserActivation}
          />
        ) : (
          filteredUsers.map(
            (
              user // Display all users when no search is performed
            ) => (
              <UserCard
                key={user.id}
                user={user}
                toggleActivation={toggleUserActivation}
              />
            )
          )
        )}
        {/* {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            toggleActivation={toggleUserActivation}
          />
        ))} */}
      </div>
    </div>
  )
}

export default AdminDashboard
