import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className=' w-1/5 h-full font-jos max-sm:hidden '>
      <div className=' flex  items-end justify-end h-[30%]'>
        <img
          src={`${window.location.origin}/images/colored.jpg`}
          alt=''
          className='object-cover h-full flip-in-hor-bottom w-full flex-1 grayscale    '
        />
      </div>
      <ul className='h-[70%] bg-yellow-400 flex flex-col gap-11 text-xl font-bold  items-center uppercase tracking-wide py-20 '>
        <NavLink to='/'>
          <li>Home</li>
        </NavLink>
        <NavLink to='about'>
          <li>About me</li>
        </NavLink>
        <NavLink to='resume'>
          <li>Resume</li>
        </NavLink>
        <NavLink to='portfolio'>
          <li>Portfolio</li>
        </NavLink>
        <NavLink to='skill'>
          <li>Skills</li>
        </NavLink>
        {/* <NavLink to="contact">
          <li>Contact</li>
        </NavLink> */}
      </ul>
    </div>
  );
}
