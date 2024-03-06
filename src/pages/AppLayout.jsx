import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function AppLayout() {
  return (
    <div className="flex overflow-y-scroll h-full w-full bg-[#dcdcdc] ">
      <Sidebar />
      <Outlet />
      <Navbar />
    </div>
  )
}
