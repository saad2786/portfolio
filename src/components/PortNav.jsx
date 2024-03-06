import { NavLink } from "react-router-dom";
export default function ContentNav() {
  return (
    <div className='flex items-center py-10 mt-4 justify-evenly *:font-bold font-jos sm:gap-5 pt-2  h-[10%]'>
      <NavLink to='all'>
        <button className='sm:px-3 font-medium py-1 sm:rounded-full px-3 bg-yellow-400 shadow-pop-tr'>
          All
        </button>
      </NavLink>
      <NavLink to='frontend'>
        <button className='sm:px-3 font-medium py-1 sm:rounded-full px-3 bg-yellow-400 shadow-pop-tr'>
          Frontend
        </button>
      </NavLink>
      <NavLink to='backend'>
        <button className='sm:px-3 font-medium py-1 sm:rounded-full px-3 bg-yellow-400 shadow-pop-tr'>
          Backend
        </button>
      </NavLink>
      <NavLink to='team'>
        <button className='sm:px-3 font-medium py-1 sm:rounded-full px-3 bg-yellow-400 shadow-pop-tr'>
          Team <span className='max-sm:hidden'>Projects</span>
        </button>
      </NavLink>
    </div>
  );
}
