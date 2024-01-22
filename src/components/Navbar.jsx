import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import WorkIcon from '@mui/icons-material/Work'
import SendIcon from '@mui/icons-material/Send'
import CampaignIcon from '@mui/icons-material/Campaign'
import BuildIcon from '@mui/icons-material/Build'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div
      className=" h-fit flex justify-evenly
        px-1.5 py-4 absolute right-6 top-1/3  bg-yellow-400 rounded-3xl shadow-xl shadow-pop-tr
      gap-6 flex-col *:cursor-pointer "
    >
      <NavLink to="/">
        <div>
          <HomeIcon />
        </div>
      </NavLink>
      <NavLink to="about">
        <div>
          <PersonIcon />
        </div>
      </NavLink>
      <NavLink to="resume">
        <div>
          <WorkIcon />
        </div>
      </NavLink>
      <NavLink to="portfolio">
        <div>
          <CampaignIcon />
        </div>
      </NavLink>
      <NavLink to="skill">
        <div>
          <BuildIcon />
        </div>
      </NavLink>
      <NavLink to="contact">
        <div>
          <SendIcon />
        </div>
      </NavLink>
    </div>
  )
}
