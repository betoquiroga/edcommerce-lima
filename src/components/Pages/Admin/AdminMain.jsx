import { Outlet } from "react-router-dom"
import AdminHeader from "./AdminHeader"

const MainAdmin = () => {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  )
}

export default MainAdmin
