import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "../App"
import Main from "../components/Main"
import UserDetails from "../components/UserDetails"
import Permissions from "../components/Permissions"
import UserDetail from "../components/UserDetail"
import VerifiedUsers from "../components/VerifiedUsers"
import AdminDashboard from "../components/AdminDashboard"
import { useState } from "react"

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Main />} />
            <Route path="/user" element={<AdminDashboard />} />
            <Route path="/user/list/:email" element={<UserDetail />} />
            <Route path="/permissions" element={<Permissions />} />
            <Route path="/user/verified" element={<VerifiedUsers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
