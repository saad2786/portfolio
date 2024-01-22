import { NavLink } from 'react-router-dom'
export default function ContentNav() {
  return (
    <div className="flex items-center justify-evenly *:font-bold font-jos h-[10%] max-sm:text-sm max-sm:w-[95vw]">
      <NavLink to="all">
        <button className="px-3 font-medium py-1 rounded-full bg-yellow-400 shadow-pop-tr">
          All
        </button>
      </NavLink>
      <NavLink to="frontend">
        <button className="px-3 font-medium py-1 rounded-full bg-yellow-400 shadow-pop-tr">
          Frontend
        </button>
      </NavLink>
      <NavLink to="backend">
        <button className="px-3 font-medium py-1 rounded-full bg-yellow-400 shadow-pop-tr">
          Backend
        </button>
      </NavLink>
      <NavLink to="team">
        <button className="px-3 font-medium py-1 rounded-full bg-yellow-400 shadow-pop-tr">
          Team <span className="max-sm:hidden">Projects</span>
        </button>
      </NavLink>
    </div>
  )
}
