import React from "react"
import { Link } from "react-router-dom"
import {
  FaTachometerAlt,
  FaRegSun,
  FaWrench,
  FaStickyNote,
  FaRegChartBar,
  FaRegCalendarAlt,
  FaChevronRight,
  FaChevronLeft,
  FaBolt,
} from "react-icons/fa"

const Sidebar = () => {
  return (
    <div className="bg-[#4E73DF] px-[25px] h-screen">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
        <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
          Admin panel
        </h1>
      </div>
      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer">
        <FaTachometerAlt color="white" />
        <p className="text-[14px] leading-[20px] font-bold text-white">
          <Link to="/">Dashboard</Link>
        </p>
      </div>
      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
          {" "}
          Users
        </p>
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaRegSun color="white" />{" "}
            <p className="text-[14px] leading-[20px] font-normal text-white">
              <Link to="/user">All Users</Link>
            </p>
          </div>
          <FaChevronRight color="white" />
        </div>
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaWrench color="white" />{" "}
            <p className="text-[14px] leading-[20px] font-normal text-white">
              <Link to="/user/verified">Verified Users</Link>
            </p>
          </div>
          <FaChevronRight color="white" />
        </div>
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaStickyNote color="white" />{" "}
            <p className="text-[14px] leading-[20px] font-normal text-white">
              <Link to="/permissions">Deactivate</Link>
            </p>
          </div>
          <FaChevronRight color="white" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
