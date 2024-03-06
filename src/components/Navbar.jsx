import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
// import SendIcon from "@mui/icons-material/Send";
import CampaignIcon from "@mui/icons-material/Campaign";
import BuildIcon from "@mui/icons-material/Build";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      className=' sm:h-fit h-16 flex justify-evenly
      items-center
        sm:px-1.5 sm:py-4 py-2 px-2 sm:absolute fixed bottom-0 text-xl w-full sm:w-fit sm:right-6 sm:top-1/3   bg-yellow-400 sm:rounded-3xl shadow-xl sm:shadow-pop-tr
      gap-6 sm:flex-col *:cursor-pointer '
    >
      <NavLink to='/'>
        <div>
          <HomeIcon sx={{fontSize:"32px"}} />
        </div>
      </NavLink>
      <NavLink to='about'>
        <div>
          <PersonIcon sx={{fontSize:"32px"}}/>
        </div>
      </NavLink>
      <NavLink to='resume'>
        <div>
          <WorkIcon sx={{fontSize:"32px"}}/>
        </div>
      </NavLink>
      <NavLink to='portfolio'>
        <div>
          <CampaignIcon sx={{fontSize:"32px"}}/>
        </div>
      </NavLink>
      <NavLink to='skill'>
        <div>
          <BuildIcon sx={{fontSize:"32px"}}/>
        </div>
      </NavLink>
      {/* <NavLink to='contact'>
        <div>
          <SendIcon />
        </div>
      </NavLink> */}
    </div>
  );
}
