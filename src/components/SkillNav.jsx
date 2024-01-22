import { NavLink } from 'react-router-dom'
export default function SkillNav() {
  return (
    <div className="flex items-center py-10 justify-evenly *:font-bold font-jos max-sm:text-sm max-sm:w-[80vw] max-sm:mx-10 max-sm:gap-5 max-sm:pt-2 max-sm:flex-wrap h-[10%]">
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
      <NavLink to="database">
        <button className="px-3 font-medium py-1 rounded-full bg-yellow-400 shadow-pop-tr">
          Database
        </button>
      </NavLink>
      <NavLink to="programming">
        <button className="px-3 font-medium py-1 rounded-full bg-yellow-400 shadow-pop-tr">
          Programming
        </button>
      </NavLink>
    </div>
  )
}
