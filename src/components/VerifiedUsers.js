import React, { useState } from "react"
import UserFilter from "./UserFilter"
// import UserCard from "./UserCard"
import UserCardThree from "./UserCardThree"

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
    {
      id: 4,
      time_created: "2023-08-17T13:43:02.925Z",
      time_updated: "2023-08-17T13:43:02.925Z",
      cognito_user_id: "test1@gmail.com",
      first_name: "adnan",
      last_name: "farooq",
      email: "test1@gmail.com",
      birthday: null,
      gender: null,
      address: null,
      about_me: null,
      username: "adnan farooq",
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
    {
      id: 6,
      time_created: "2023-08-17T20:22:59.410Z",
      time_updated: "2023-08-17T20:22:59.410Z",
      cognito_user_id: "nanan",
      first_name: "pryianka ",
      last_name: "abc",
      email: "abc@gmail.com",
      birthday: null,
      gender: null,
      address: null,
      about_me: null,
      username: "abab nnana",
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
    {
      id: 8,
      time_created: "2023-08-21T23:28:03.047Z",
      time_updated: "2023-08-21T23:28:03.047Z",
      cognito_user_id: "test01",
      first_name: "test1",
      last_name: "test1",
      email: "test01@gmail.com",
      birthday: null,
      gender: null,
      address: null,
      about_me: null,
      username: "abab nnana",
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
    {
      id: 5,
      time_created: "2023-08-17T17:53:17.773Z",
      time_updated: "2023-08-17T17:53:17.773Z",
      cognito_user_id: "azaancognito",
      first_name: "azaan",
      last_name: "farooq",
      email: "azaan@gmail.com",
      birthday: null,
      gender: null,
      address: null,
      about_me: null,
      username: "azaan Farooq",
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

const VerifiedUsers = () => {
  const [users, setUsers] = useState(initialData["LOGIN SUCCESS FOR ADMIN"])
  const [filter, setFilter] = useState("all")

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
  }

  const filteredUsers = users.filter((user) => {
    if (filter === "enabled") return !user.deactivated
    if (filter === "disabled") return user.deactivated
    return true
  })

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1> */}
      <UserFilter filter={filter} setFilter={setFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredUsers.map((user) => (
          <UserCardThree key={user.id} user={user} />
          //   <UserCardThree key={user.id} user={user} deleteUser={deleteUser} />
        ))}
      </div>
    </div>
  )
}

export default VerifiedUsers
