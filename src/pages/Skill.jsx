import Container from '../components/Container'
import Heading from '../components/Heading'

import 'react-circular-progressbar/dist/styles.css'
import SkillNav from '../components/SkillNav'
import { Outlet } from 'react-router'

export default function Skill() {
  return (
    <Container>
      <Heading>Skills</Heading>
      <div className="px-4 h-4/5 w-4/5 max-sm:h-[90%] max-sm:w-[90vw]">
        <SkillNav />
        <div
          className="flex  
    gap-6 max-sm:gap-2 items-start 
        justify-evenly  flex-wrap  w-full max-sm:w-[90vw] h-[84%] pt-10 pl-5 
        overflow-y-scroll  max-sm:mt-10   "
        >
          <Outlet />
        </div>
      </div>
    </Container>
  )
}
