import { NavLink } from "react-router-dom";
export default function SkillNav() {
  return (
    <div className='flex  items-center py-10 mt-4 justify-evenly *:font-bold font-jos sm:gap-5 pt-2  h-[10%]'>
      <NavLink to='frontend'>
        <button className='sm:px-3 px-1 font-medium py-1 sm:rounded-full bg-yellow-400 shadow-pop-tr'>
          Frontend
        </button>
      </NavLink>
      <NavLink to='backend'>
        <button className='sm:px-3 px-1 font-medium py-1 sm:rounded-full bg-yellow-400 shadow-pop-tr'>
          Backend
        </button>
      </NavLink>
      <NavLink to='database'>
        <button className='sm:px-3 px-1 font-medium py-1 sm:rounded-full bg-yellow-400 shadow-pop-tr'>
          Database
        </button>
      </NavLink>
      <NavLink to='programming'>
        <button className='sm:px-3 px-1 font-medium py-1 sm:rounded-full bg-yellow-400 shadow-pop-tr'>
          Programming
        </button>
      </NavLink>
    </div>
  );
}
