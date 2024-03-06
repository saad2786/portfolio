import Container from "../components/Container";
import Heading from "../components/Heading";

import "react-circular-progressbar/dist/styles.css";
import SkillNav from "../components/SkillNav";
import { Outlet } from "react-router";

export default function Skill() {
  return (
    <Container>
      <Heading>Skills</Heading>
      <div className='px-4 h-4/5    w-[90vw]'>
        <SkillNav />
        <div
          className='flex gap-6 max-sm:gap-2 items-start justify-evenly  flex-wrap  w-full h-fit  py-10  overflow-auto '
        >
          <Outlet />
        </div>
      </div>
    </Container>
  );
}
